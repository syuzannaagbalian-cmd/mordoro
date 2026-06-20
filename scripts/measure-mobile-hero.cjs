const { chromium } = require('playwright');

const FIGMA = {
  frame: { w: 390, h: 961 },
};

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 961 } });
  await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const metrics = await page.evaluate(() => {
    const root = document.querySelector('[data-node-id="295:405"]');
    const r = root?.getBoundingClientRect();
    const rel = (id) => {
      const el = document.querySelector(`[data-node-id="${id}"]`);
      if (!el || !r) return null;
      const b = el.getBoundingClientRect();
      return {
        x: +(b.x - r.x).toFixed(2),
        y: +(b.y - r.y).toFixed(2),
        w: +b.width.toFixed(2),
        h: +b.height.toFixed(2),
      };
    };
    return {
      frame: r ? { w: r.width, h: r.height } : null,
      scrollWidth: document.documentElement.scrollWidth,
      logo: rel('322:154'),
      support: rel('312:1029'),
      badge: rel('322:156'),
      cta: rel('312:1068'),
      desktopVisible: !!document.querySelector('[data-node-id="210:1322"]')?.offsetParent,
    };
  });

  console.log('IMPLEMENTATION:', JSON.stringify(metrics, null, 2));
  console.log('FIGMA frame:', FIGMA.frame);

  const section = page.locator('[data-node-id="295:405"]');
  const box = await section.boundingBox();
  if (box) {
    await page.screenshot({
      path: 'comparison-mobile-hero.png',
      clip: { x: box.x, y: box.y, width: 390, height: Math.ceil(box.height) },
    });
  }

  await browser.close();
  console.log('screenshot saved');
})();
