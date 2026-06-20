const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3003', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  const section = page.locator('[data-node-id="278:378"]');
  await section.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  const box = await section.boundingBox();
  if (box) {
    await page.screenshot({
      path: 'comparison-order-section.png',
      clip: { x: box.x, y: box.y, width: 1440, height: 809 },
    });
  } else {
    await page.screenshot({ path: 'comparison-order-section.png' });
  }

  await browser.close();
  console.log('order section screenshot saved');
})();
