const { chromium } = require('playwright');

const WIDTHS = [320, 375, 390, 414, 430];

(async () => {
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

    const report = await page.evaluate(() => {
      const connectors = [...document.querySelectorAll('.mobile-steps-connector')];
      const centers = connectors.map((el) => {
        const rect = el.getBoundingClientRect();
        return rect.left + rect.width / 2;
      });
      const axisDelta =
        centers.length === 2 ? Math.abs(centers[0] - centers[1]) : null;
      const group = document.querySelector('.mobile-steps-group');
      const groupStyle = group ? getComputedStyle(group) : null;
      const connectorX = groupStyle?.getPropertyValue('--steps-connector-x').trim() ?? null;

      return {
        viewportWidth: window.innerWidth,
        connectorCount: connectors.length,
        centerX: centers.map((v) => Math.round(v * 1000) / 1000),
        axisDelta,
        connectorX,
        horizontalOverflow:
          document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      };
    });

    const ok =
      report.connectorCount === 2 &&
      report.axisDelta != null &&
      report.axisDelta <= 0.5 &&
      !report.horizontalOverflow;
    allPass = allPass && ok;
    console.log(JSON.stringify({ ...report, pass: ok }));
  }

  await browser.close();
  if (!allPass) process.exit(1);
})();
