import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const URL = 'http://localhost:3000'
const OUT = 'public/audit'

const viewports = [
  { name: 'desktop', width: 1440, height: 900, dsf: 1 },
  { name: 'tablet',  width: 768,  height: 1024, dsf: 2, mobile: true },
  { name: 'mobile',  width: 390,  height: 844,  dsf: 3, mobile: true },
]

// Anchor selectors, in document order
const sections = [
  { name: 'hero',          selector: 'main > section:nth-of-type(1)' },
  { name: 'about',         selector: '#about' },
  { name: 'issues',        selector: '#issues' },
  { name: 'fight-callout', selector: 'main > section:nth-of-type(5)' },
  { name: 'stats',         selector: 'main > section:nth-of-type(6)' },
  { name: 'endorsements',  selector: '#endorsements' },
  { name: 'join',          selector: '#join' },
  { name: 'cta',           selector: 'main > section:nth-of-type(9)' },
  { name: 'footer',        selector: 'footer' },
]

mkdirSync(OUT, { recursive: true })
const browser = await chromium.launch()

for (const v of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: v.width, height: v.height },
    deviceScaleFactor: v.dsf,
    isMobile: !!v.mobile,
    hasTouch: !!v.mobile,
  })
  const page = await ctx.newPage()
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(500)

  for (const s of sections) {
    const loc = page.locator(s.selector).first()
    try {
      await loc.scrollIntoViewIfNeeded({ timeout: 4000 })
      await page.waitForTimeout(250)
      const box = await loc.boundingBox()
      const clip = box
        ? {
            x: 0,
            y: Math.max(0, box.y),
            width: v.width,
            height: Math.min(v.height, Math.max(200, box.height)),
          }
        : null
      const out = join(OUT, `${v.name}-${s.name}.png`)
      await page.screenshot({ path: out, clip })
      console.log(`${v.name.padEnd(7)} ${s.name.padEnd(14)} saved`)
    } catch (e) {
      console.log(`${v.name.padEnd(7)} ${s.name.padEnd(14)} FAILED: ${e.message}`)
    }
  }

  await ctx.close()
}

await browser.close()
console.log('Done')
