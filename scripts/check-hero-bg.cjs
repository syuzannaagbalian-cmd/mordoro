const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1032 } });
  await page.goto('http://localhost:3003', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(2000);

  const metrics = await page.evaluate(() => {
    const img = document.querySelector('.hero-bg-image');
    if (!img) return { error: 'no img' };
    const cs = getComputedStyle(img);
    return {
      className: img.className,
      left: cs.left,
      width: cs.width,
      position: cs.position,
      rect: img.getBoundingClientRect(),
    };
  });

  console.log(JSON.stringify(metrics, null, 2));
  await browser.close();
})();
