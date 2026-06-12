/* QA harness: loads each post at exact viewport, verifies layout, exports screenshots. */
const { chromium } = require('playwright')
const path = require('path')

const DIR = __dirname
const POSTS = []
for (let i = 1; i <= 10; i++) POSTS.push({ name: `feed-${String(i).padStart(2, '0')}`, w: 1080, h: 1080 })
for (let i = 1; i <= 10; i++) POSTS.push({ name: `story-${String(i).padStart(2, '0')}`, w: 608, h: 1080 })

/* Stories are authored on a 1080x1920 grid rendered at scale .5625 — safe zone 250..1670 maps to 141..939 */
const SAFE_TOP = 141
const SAFE_BOTTOM = 939

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const results = []

  for (const post of POSTS) {
    const page = await browser.newPage({ viewport: { width: post.w, height: post.h } })
    const fileUrl = 'file:///' + path.join(DIR, post.name + '.html').replace(/\\/g, '/')
    await page.goto(fileUrl, { waitUntil: 'networkidle' })
    await page.evaluate(() => document.fonts.ready)
    await page.waitForTimeout(150)

    const report = await page.evaluate(({ w, h, isStory, safeTop, safeBottom }) => {
      const issues = []

      if (document.body.scrollWidth > w || document.documentElement.scrollWidth > w)
        issues.push(`h-overflow: body=${document.body.scrollWidth}px`)
      if (document.body.scrollHeight > h || document.documentElement.scrollHeight > h)
        issues.push(`v-overflow: body=${document.body.scrollHeight}px`)

      const wanted = ['Playfair Display', 'Space Grotesk', 'Inter', 'JetBrains Mono']
      const used = new Set()
      document.querySelectorAll('body *').forEach((el) => {
        if (!el.textContent.trim()) return
        const ff = getComputedStyle(el).fontFamily
        wanted.forEach((f) => { if (ff.includes(f)) used.add(f) })
      })
      const loaded = new Set()
      document.fonts.forEach((f) => { if (f.status === 'loaded') loaded.add(f.family.replace(/['"]/g, '')) })
      const fontsOk = [...used].every((f) => loaded.has(f))
      used.forEach((f) => { if (!loaded.has(f)) issues.push(`font not loaded: ${f}`) })

      const els = [...document.querySelectorAll('.headline,.subhead,.body,.cta,.eyebrow,.caption')]
      const rects = []
      for (const el of els) {
        const r = el.getBoundingClientRect()
        const cls = el.className.split(' ')[0]
        if (el.clientWidth > 0 && el.scrollWidth > el.clientWidth + 2)
          issues.push(`${cls} clipped-x (${el.scrollWidth}>${el.clientWidth})`)
        if (el.clientWidth > 0 && el.scrollHeight > el.clientHeight + 2 && getComputedStyle(el).overflow !== 'visible')
          issues.push(`${cls} clipped-y (${el.scrollHeight}>${el.clientHeight})`)
        if (r.left < -1 || r.right > w + 1 || r.top < -1 || r.bottom > h + 1)
          issues.push(`${cls} outside canvas (${Math.round(r.left)},${Math.round(r.top)},${Math.round(r.right)},${Math.round(r.bottom)})`)
        if (isStory && ['headline', 'subhead', 'body', 'cta'].includes(cls)) {
          if (r.top < safeTop || r.bottom > safeBottom)
            issues.push(`${cls} outside safe zone (top=${Math.round(r.top)}, bottom=${Math.round(r.bottom)})`)
        }
        rects.push({ cls, r, el })
      }

      const core = rects.filter(({ cls }) => ['headline', 'subhead', 'body', 'cta'].includes(cls))
      for (let i = 0; i < core.length; i++) {
        for (let j = i + 1; j < core.length; j++) {
          const a = core[i], b = core[j]
          if (a.el.contains(b.el) || b.el.contains(a.el)) continue
          const ox = Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left)
          const oy = Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top)
          if (ox > 4 && oy > 4) issues.push(`overlap: ${a.cls} × ${b.cls} (${Math.round(ox)}×${Math.round(oy)}px)`)
        }
      }

      const headline = document.querySelector('.headline')
      const cta = document.querySelector('.cta')
      if (!headline) issues.push('no .headline found')
      if (!cta) issues.push('no .cta found')

      return { issues, fontsOk }
    }, { w: post.w, h: post.h, isStory: post.name.startsWith('story'), safeTop: SAFE_TOP, safeBottom: SAFE_BOTTOM })

    const exact = await page.evaluate(() => {
      const el = document.querySelector('.post')
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { l: r.left, t: r.top, w: r.width, h: r.height }
    })
    if (!exact) report.issues.push('no .post wrapper')
    else if (Math.abs(exact.l) > 0.5 || Math.abs(exact.t) > 0.5 || Math.abs(exact.w - post.w) > 0.5 || Math.abs(exact.h - post.h) > 0.5)
      report.issues.push(`post not 1:1 at export size (${exact.l},${exact.t},${exact.w}x${exact.h})`)

    await page.screenshot({ path: path.join(DIR, post.name + '.png') })

    await page.setViewportSize({ width: 1440, height: 900 })
    await page.waitForTimeout(120)
    const view = await page.evaluate(() => {
      const r = document.querySelector('.post').getBoundingClientRect()
      return { left: r.left, top: r.top, right: r.right, bottom: r.bottom, h: r.height, vw: innerWidth, vh: innerHeight }
    })
    if (view.left < -0.5 || view.top < -0.5 || view.right > view.vw + 0.5 || view.bottom > view.vh + 0.5)
      report.issues.push(`post cut off in browser view (t=${Math.round(view.top)} b=${Math.round(view.bottom)})`)
    if (Math.abs(view.left - (view.vw - view.right)) > 2 || Math.abs(view.top - (view.vh - view.bottom)) > 2)
      report.issues.push('post not centered in browser view')
    if (view.h > view.vh + 1) report.issues.push('post not scaled to fit browser view')

    results.push({ name: post.name, size: `${post.w}x${post.h}`, pass: report.issues.length === 0, issues: report.issues })
    console.log(`${report.issues.length === 0 ? 'PASS' : 'FAIL'}  ${post.name}  ${report.issues.join(' | ')}`)
    await page.close()
  }

  await browser.close()
  const failed = results.filter((r) => !r.pass)
  console.log(`\n${results.length - failed.length}/${results.length} passed`)
  process.exit(failed.length ? 1 : 0)
})()
