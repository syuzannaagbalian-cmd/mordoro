const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(3000);

  const report = await page.evaluate(() => {
    const ids = ['295:405', '312:1103', '312:1129', '312:1204', '312:1398'];
    const sections = ids.map((id) => {
      const el = document.querySelector(`[data-node-id="${id}"]`);
      if (!el) return { id, missing: true };
      const b = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      return {
        id,
        w: b.width,
        h: b.height,
        overflow: cs.overflowX,
        maxWidth: cs.maxWidth,
      };
    });

    const wide = [];
    document.querySelectorAll('.site-layout--mobile *').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > 390.5 || r.left < -0.5) {
        const id = el.getAttribute('data-node-id') || el.tagName;
        if (r.width > 50) wide.push({ id, left: r.left, right: r.right, w: r.width });
      }
    });

    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      bodyOverflow: getComputedStyle(document.body).overflowX,
      mobileShellOverflow: getComputedStyle(document.querySelector('.site-layout--mobile')).overflowX,
      sections,
      wideElements: wide.slice(0, 15),
    };
  });

  console.log(JSON.stringify(report, null, 2));
  await browser.close();
})();
