const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3004', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  const section = page.locator('[data-node-id="284:272"]');
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const box = await section.boundingBox();
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  console.log('section height:', box?.height, metrics);

  if (box) {
    await page.screenshot({
      path: 'comparison-block5-faq.png',
      clip: { x: box.x, y: box.y, width: 1440, height: Math.ceil(box.height) },
    });
  } else {
    await page.screenshot({ path: 'comparison-block5-faq.png' });
  }

  await browser.close();
  console.log('block 5 faq screenshot saved');
})();
