import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { join } from 'node:path'

const URL = process.env.AUDIT_URL || 'http://localhost:3000'
const OUT = 'public/audit'

const viewports = [
  { name: 'desktop', width: 1440, height: 900, deviceScaleFactor: 1 },
  { name: 'tablet',  width: 768,  height: 1024, deviceScaleFactor: 2, isMobile: true, hasTouch: true },
  { name: 'mobile',  width: 390,  height: 844,  deviceScaleFactor: 3, isMobile: true, hasTouch: true },
]

mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()

for (const v of viewports) {
  const context = await browser.newContext({
    viewport: { width: v.width, height: v.height },
    deviceScaleFactor: v.deviceScaleFactor,
    isMobile: v.isMobile ?? false,
    hasTouch: v.hasTouch ?? false,
  })
  const page = await context.newPage()
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 30000 })
  await page.waitForTimeout(800) // let fonts / images settle

  // Full-page
  const full = join(OUT, `${v.name}-full.png`)
  await page.screenshot({ path: full, fullPage: true })

  // Above-the-fold
  const fold = join(OUT, `${v.name}-fold.png`)
  await page.screenshot({ path: fold, fullPage: false })

  const title = await page.title()
  const scroll = await page.evaluate(() => document.documentElement.scrollHeight)
  console.log(`${v.name.padEnd(7)} ${v.width}x${v.height}  scroll=${scroll}px  title="${title}"`)

  await context.close()
}

await browser.close()
console.log('Saved to', OUT)
