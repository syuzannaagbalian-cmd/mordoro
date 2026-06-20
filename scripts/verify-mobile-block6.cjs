const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 1200 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(2000);

  const closed = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    block6: document.querySelector('[data-node-id="312:1424"]')?.getBoundingClientRect(),
  }));

  await page.click('[data-node-id="312:1428"]');
  await page.waitForTimeout(500);

  const open = await page.evaluate(() => ({
    expanded: document.querySelector('[data-node-id="312:1428"]')?.getAttribute('aria-expanded'),
    answerOpen: !!document.querySelector('.mobile-block6-answer-grid--open'),
    block6Height: document.querySelector('[data-node-id="312:1424"]')?.getBoundingClientRect().height,
  }));

  console.log(JSON.stringify({ closed, open }, null, 2));
  await browser.close();
})();
