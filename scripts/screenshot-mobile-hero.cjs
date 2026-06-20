const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 921 } });
  await page.goto('http://localhost:3004', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const section = page.locator('[data-node-id="311:280"]');
  await section.waitFor({ state: 'visible', timeout: 10000 });
  const box = await section.boundingBox();
  console.log('mobile hero:', box);

  if (box) {
    await page.screenshot({
      path: 'comparison-mobile-hero.png',
      clip: { x: box.x, y: box.y, width: 390, height: Math.ceil(box.height) },
    });
  }

  await browser.close();
  console.log('mobile hero screenshot saved');
})();
