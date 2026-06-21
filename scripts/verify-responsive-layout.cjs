const { chromium } = require('playwright');

const WIDTHS = [360, 375, 390, 393, 414, 430, 768];

async function auditWidth(page, width) {
  await page.setViewportSize({ width, height: 900 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  return page.evaluate((viewportWidth) => {
    const mobileLayout = document.querySelector('.site-layout--mobile');
    const desktopLayout = document.querySelector('.site-layout--desktop');
    const mobileStyle = mobileLayout ? getComputedStyle(mobileLayout) : null;
    const desktopStyle = desktopLayout ? getComputedStyle(desktopLayout) : null;
    const mobileHero = document.querySelector('.hero-mobile');
    const desktopHero = document.querySelector('.hero-frame-bg');
    const viewportMeta = document.querySelector('meta[name="viewport"]')?.getAttribute('content') ?? null;

    return {
      viewportWidth,
      viewportMeta,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      mobileLayoutDisplay: mobileStyle?.display ?? null,
      desktopLayoutDisplay: desktopStyle?.display ?? null,
      mobileHeroVisible: !!mobileHero && mobileHero.getBoundingClientRect().width > 0,
      desktopHeroVisible: !!desktopHero && desktopHero.getBoundingClientRect().width > 0,
      mobileOrderVisible:
        !!document.getElementById('mobile-order-section') &&
        document.getElementById('mobile-order-section').getBoundingClientRect().width > 0,
      desktopOrderVisible:
        !!document.getElementById('desktop-order-section') &&
        document.getElementById('desktop-order-section').getBoundingClientRect().width > 0,
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    };
  }, width);
}

function pass(report) {
  const isMobile = report.viewportWidth < 768;
  if (isMobile) {
    return (
      report.mobileLayoutDisplay === 'block' &&
      report.desktopLayoutDisplay === 'none' &&
      report.mobileHeroVisible &&
      !report.desktopHeroVisible &&
      report.mobileOrderVisible &&
      !report.desktopOrderVisible &&
      !report.horizontalOverflow
    );
  }
  return (
    report.mobileLayoutDisplay === 'none' &&
    report.desktopLayoutDisplay === 'block' &&
    !report.mobileHeroVisible &&
    report.desktopHeroVisible &&
    !report.mobileOrderVisible &&
    report.desktopOrderVisible
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
