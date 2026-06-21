const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const WIDTHS = [375, 390, 414, 430];
const OUT = path.join(process.cwd(), 'scripts', 'output', 'mobile-steps-connectors');

function centerY(el) {
  const rect = el.getBoundingClientRect();
  return rect.top + rect.height / 2;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL || 'http://localhost:3000', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });

  let allPass = true;

  for (const width of WIDTHS) {
    await page.setViewportSize({ width, height: 844 });
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(300);

    const section = page.locator('[data-node-id="312:1103"]');
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await section.screenshot({ path: path.join(OUT, `steps-${width}.png`) });

    const report = await page.evaluate(() => {
      const n1 = document.querySelector('.mobile-steps-number--1');
      const n2 = document.querySelector('.mobile-steps-number--2');
      const n3 = document.querySelector('.mobile-steps-number--3');
      const c1 = document.querySelector('.mobile-steps-connector--after-1');
      const c2 = document.querySelector('.mobile-steps-connector--after-2');

      const center = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top + rect.height / 2;
      };

      const n1c = center(n1);
      const n2c = center(n2);
      const n3c = center(n3);
      const c1c = center(c1);
      const c2c = center(c2);

      const gap1Mid = (n1c + n2c) / 2;
      const gap2Mid = (n2c + n3c) / 2;

      const c1x = c1.getBoundingClientRect().left + c1.getBoundingClientRect().width / 2;
      const c2x = c2.getBoundingClientRect().left + c2.getBoundingClientRect().width / 2;

      const clearsLowerNumber = (connector, lowerNumber) => {
        const cr = connector.getBoundingClientRect();
        const nr = lowerNumber.getBoundingClientRect();
        return cr.bottom <= nr.top + 1;
      };

      return {
        viewportWidth: window.innerWidth,
        gap1Mid,
        gap2Mid,
        c1CenterY: c1c,
        c2CenterY: c2c,
        c1GapDelta: Math.abs(c1c - gap1Mid),
        c2GapDelta: Math.abs(c2c - gap2Mid),
        axisDelta: Math.abs(c1x - c2x),
        c1AboveN2: clearsLowerNumber(c1, n2),
        c2AboveN3: clearsLowerNumber(c2, n3),
        horizontalOverflow:
          document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      };
    });

    const ok =
      report.c1GapDelta <= 2 &&
      report.c2GapDelta <= 2 &&
      report.axisDelta <= 0.5 &&
      report.c1AboveN2 &&
      report.c2AboveN3 &&
      !report.horizontalOverflow;

    allPass = allPass && ok;
    console.log(JSON.stringify({ ...report, pass: ok, screenshot: `steps-${width}.png` }));
  }

  await browser.close();
  console.log('Screenshots saved to', OUT);
  if (!allPass) process.exit(1);
})();
