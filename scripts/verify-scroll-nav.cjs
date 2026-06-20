const { chromium } = require('playwright');

async function testScroll(name, width, ctaSelector, targetId) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);

  const before = await page.evaluate((id) => ({
    scrollY: window.scrollY,
    targetExists: !!document.getElementById(id),
    targetVisible: (() => {
      const el = document.getElementById(id);
      if (!el) return false;
      const layout = el.closest('.site-layout--mobile, .site-layout--desktop');
      return !layout || getComputedStyle(layout).display !== 'none';
    })(),
    ctaRect: document.querySelector('[data-node-id="' + (id === 'mobile-order-section' ? '312:1068' : id === 'desktop-order-section' ? '210:1338' : '284:264') + '"]')?.getBoundingClientRect(),
  }), targetId);

  if (ctaSelector.includes('284:264')) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(400);
  }

  await page.click(ctaSelector);
  await page.waitForTimeout(1200);

  const after = await page.evaluate((id) => ({
    scrollY: window.scrollY,
    targetTop: document.getElementById(id)?.getBoundingClientRect().top,
  }), targetId);

  console.log(name, { before, after, pass: after.targetTop != null && Math.abs(after.targetTop) < 5 });
  await browser.close();
}

(async () => {
  await testScroll('mobile-hero', 390, '[data-node-id="312:1068"]', 'mobile-order-section');
  await testScroll('desktop-hero', 1440, '[data-node-id="210:1338"]', 'desktop-order-section');
  await testScroll('desktop-social', 1440, '[data-node-id="284:264"]', 'desktop-order-section');
})();
