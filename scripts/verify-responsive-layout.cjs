const { chromium } = require('playwright');

const WIDTHS = [320, 360, 375, 390, 393, 414, 430, 768];

async function auditWidth(page, width) {
  await page.setViewportSize({ width, height: 900 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  return page.evaluate((viewportWidth) => {
    const mobileLayout = document.querySelector('.site-layout--mobile');
    const desktopLayout = document.querySelector('.site-layout--desktop');
    const mobileStyle = mobileLayout ? getComputedStyle(mobileLayout) : null;
    const desktopStyle = desktopLayout ? getComputedStyle(desktopLayout) : null;
    const heroFrame = document.querySelector('.hero-mobile');
    const heroCanvas = document.querySelector('.hero-mobile .mobile-scale-canvas');
    const heroRect = heroCanvas?.getBoundingClientRect() ?? heroFrame?.getBoundingClientRect();
    const orderSection = document.getElementById('mobile-order-section');

    const sideGap =
      heroRect != null ? Math.max(0, Math.round((viewportWidth - heroRect.width) / 2)) : null;

    return {
      viewportWidth,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      mobileLayoutDisplay: mobileStyle?.display ?? null,
      desktopLayoutDisplay: desktopStyle?.display ?? null,
      heroWidth: heroRect?.width ?? null,
      sideGap,
      mobileOrderWidth: orderSection?.getBoundingClientRect().width ?? null,
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    };
  }, width);
}

function pass(report) {
  const isMobile = report.viewportWidth < 768;
  if (!isMobile) {
    return (
      report.mobileLayoutDisplay === 'none' &&
      report.desktopLayoutDisplay === 'block' &&
      !report.horizontalOverflow
    );
  }

  const expectedHeroWidth = Math.min(report.viewportWidth, 430);
  const heroFills =
    report.heroWidth != null && Math.abs(report.heroWidth - expectedHeroWidth) <= 2;
  const noSideGap = report.sideGap != null && report.sideGap <= 1;

  return (
    report.mobileLayoutDisplay === 'block' &&
    report.desktopLayoutDisplay === 'none' &&
    heroFills &&
    noSideGap &&
    !report.horizontalOverflow
  );
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 60000 });

  let allPass = true;
  for (const width of WIDTHS) {
    const report = await auditWidth(page, width);
    const ok = pass(report);
    allPass = allPass && ok;
    console.log(JSON.stringify({ ...report, pass: ok }));
  }

  await browser.close();
  if (!allPass) process.exit(1);
})();
