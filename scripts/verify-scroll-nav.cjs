const { chromium } = require('playwright');

(async () => {
  let allPass = true;
  const results = [];

  async function run(name, width, ctaSelector, targetId) {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(process.env.BASE_URL || 'http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });
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

    const pass = after.targetTop != null && Math.abs(after.targetTop) < 80;
    allPass = allPass && pass;
    results.push({ name, before, after, pass });
    await browser.close();
  }

  await run('mobile-hero', 390, '[data-node-id="312:1068"]', 'mobile-order-section');
  await run('desktop-hero', 1440, '[data-node-id="210:1338"]', 'desktop-order-section');
  await run('desktop-social', 1440, '[data-node-id="284:264"]', 'desktop-order-section');

  for (const result of results) {
    console.log(result.name, result);
  }

  if (!allPass) process.exit(1);
})();
