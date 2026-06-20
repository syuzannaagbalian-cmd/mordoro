const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 1400 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const section = page.locator('[data-node-id="312:1103"]');
  await section.waitFor({ state: 'visible', timeout: 10000 });

  const metrics = await page.evaluate(() => {
    const root = document.querySelector('[data-node-id="312:1103"]');
    const r = root.getBoundingClientRect();
    const rel = (id) => {
      const el = document.querySelector(`[data-node-id="${id}"]`);
      if (!el) return null;
      const b = el.getBoundingClientRect();
      return {
        x: +(b.x - r.x).toFixed(2),
        y: +(b.y - r.y).toFixed(2),
        w: +b.width.toFixed(2),
        h: +b.height.toFixed(2),
      };
    };
    return {
      section: { w: r.width, h: r.height },
      scrollWidth: document.documentElement.scrollWidth,
      stepsGroup: rel('312:1105'),
      step01: rel('312:1107'),
      step02: rel('312:1116'),
      step03: rel('312:1119'),
      line32: rel('312:1124'),
      line33: rel('312:1123'),
    };
  });

  console.log(JSON.stringify(metrics, null, 2));

  const box = await section.boundingBox();
  if (box) {
    await page.screenshot({
      path: 'comparison-mobile-block2.png',
      clip: { x: box.x, y: box.y, width: 390, height: Math.ceil(box.height) },
    });
  }

  await browser.close();
  console.log('screenshot saved');
})();
