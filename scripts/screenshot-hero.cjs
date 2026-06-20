const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1032 } });
  await page.goto('http://localhost:3003', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(5000);

  const metrics = await page.evaluate(() => {
    const bg = document.querySelector('[data-node-id="273:437"]');
    const img = bg?.querySelector('img');
    return {
      viewport: window.innerWidth,
      bg: bg?.getBoundingClientRect(),
      img: img?.getBoundingClientRect(),
      imgLeft: img ? getComputedStyle(img).left : null,
    };
  });

  console.log(JSON.stringify(metrics, null, 2));

  await page.screenshot({
    path: 'comparison-hero.png',
    clip: { x: 0, y: 0, width: 1440, height: 1032 },
  });

  await browser.close();
  console.log('done');
})();
