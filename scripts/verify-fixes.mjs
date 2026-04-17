import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const URL = 'http://localhost:3000'
const OUT = 'public/audit/fix'

const viewports = [
  { name: 'desktop', width: 1440, height: 900, dsf: 1 },
  { name: 'tablet',  width: 768,  height: 1024, dsf: 2, mobile: true },
  { name: 'mobile',  width: 390,  height: 844,  dsf: 3, mobile: true },
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

  // Header
  await page.screenshot({
    path: join(OUT, `${v.name}-header.png`),
    clip: { x: 0, y: 0, width: v.width, height: Math.min(v.height, 120) },
  })

  // Issues section (desktop only — that's where the bento fix matters)
  if (v.name === 'desktop') {
    const issues = page.locator('#issues')
    await issues.scrollIntoViewIfNeeded()
    await page.waitForTimeout(250)
    const box = await issues.boundingBox()
    await page.screenshot({
      path: join(OUT, `${v.name}-issues.png`),
      clip: { x: 0, y: box.y, width: v.width, height: Math.min(v.height, box.height) },
    })
  }

  // On mobile + tablet — also capture the OPEN hamburger state
  if (v.name !== 'desktop') {
    await page.goto(URL, { waitUntil: 'networkidle' })
    await page.waitForTimeout(300)
    const toggle = page.locator('button[aria-controls="mobile-nav-panel"]')
    await toggle.click()
    await page.waitForTimeout(400)
    await page.screenshot({
      path: join(OUT, `${v.name}-menu-open.png`),
      clip: { x: 0, y: 0, width: v.width, height: v.height },
    })
  }

  console.log(`${v.name.padEnd(7)} captured`)
  await ctx.close()
}

await browser.close()
console.log('Done')
