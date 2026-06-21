const { chromium } = require('playwright');

const VIEWPORTS = [
  { width: 320, height: 568 },
  { width: 375, height: 667 },
  { width: 390, height: 844 },
  { width: 414, height: 896 },
  { width: 430, height: 932 },
];

function isVerticalScrollContainer(el) {
  const style = getComputedStyle(el);
  const overflowY = style.overflowY;
  if (overflowY !== 'auto' && overflowY !== 'scroll') return false;
  return el.scrollHeight > el.clientHeight + 1;
}

async function auditViewport(page, viewport) {
  await page.setViewportSize(viewport);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  return page.evaluate(({ width, height }) => {
    const heroFrame = document.querySelector('.hero-mobile');
    const heroCanvas = document.querySelector('.hero-mobile .mobile-scale-canvas');
    const scaleFrames = [...document.querySelectorAll('.site-layout--mobile .mobile-scale-frame')];
    const fluidSections = [...document.querySelectorAll('.site-layout--mobile .mobile-section-fluid')];

    function auditScroll(el, label) {
      if (!el) return null;
      const style = getComputedStyle(el);
      const overflowY = style.overflowY;
      const scrollable =
        (overflowY === 'auto' || overflowY === 'scroll') &&
        el.scrollHeight > el.clientHeight + 1;
      return {
        label,
        overflowY,
        scrollHeight: el.scrollHeight,
        clientHeight: el.clientHeight,
        scrollable,
      };
    }

    const nestedScrollers = [];

    for (const el of document.querySelectorAll('.site-layout--mobile *')) {
      const style = getComputedStyle(el);
      if (style.display === 'none') continue;
      if (el.classList.contains('mobile-block5-gallery-track')) continue;
      const oy = style.overflowY;
      if (oy === 'auto' || oy === 'scroll') {
        if (el.scrollHeight > el.clientHeight + 1) {
          nestedScrollers.push({
            tag: el.tagName.toLowerCase(),
            className: el.className,
            overflowY: oy,
            scrollHeight: el.scrollHeight,
            clientHeight: el.clientHeight,
          });
        }
      }
    }

    const heroRect = heroCanvas?.getBoundingClientRect() ?? heroFrame?.getBoundingClientRect();
    const sideGap =
      heroRect != null ? Math.max(0, Math.round((width - heroRect.width) / 2)) : null;

    return {
      viewport: { width, height },
      documentScrollHeight: document.documentElement.scrollHeight,
      horizontalOverflow:
        document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      hero: auditScroll(heroFrame, 'hero-frame'),
      heroCanvas: auditScroll(heroCanvas, 'hero-canvas'),
      scaleFrameCount: scaleFrames.length,
      nestedVerticalScrollers: nestedScrollers,
      sideGap,
      heroWidth: heroRect?.width ?? null,
    };
  }, viewport);
}

function pass(report) {
  const expectedHeroWidth = Math.min(report.viewport.width, 430);
  const heroFills =
    report.heroWidth != null && Math.abs(report.heroWidth - expectedHeroWidth) <= 2;
  const noSideGap = report.sideGap != null && report.sideGap <= 1;
  const heroNotScrollable = !report.hero?.scrollable && !report.heroCanvas?.scrollable;
  const noNestedScroll = report.nestedVerticalScrollers.length === 0;

  return (
    heroNotScrollable &&
    noNestedScroll &&
    heroFills &&
    noSideGap &&
    !report.horizontalOverflow
  );
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.BASE_URL || 'http://localhost:3000', {
    waitUntil: 'networkidle',
    timeout: 60000,
  });

  let allPass = true;
  for (const viewport of VIEWPORTS) {
    const report = await auditViewport(page, viewport);
    const ok = pass(report);
    allPass = allPass && ok;
    console.log(JSON.stringify({ ...report, pass: ok }));
  }

  await browser.close();
  if (!allPass) process.exit(1);
})();
