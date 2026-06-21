const { chromium } = require('playwright');

const DESKTOP_VIEWPORTS = [
  { width: 1280, height: 720 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1536, height: 1080 },
  { width: 1920, height: 1080 },
];

const MOBILE_WIDTHS = [320, 375, 390, 414, 430];

const FIGMA_HEIGHTS = {
  order: 809,
  included: 652,
  social: 592,
  faqMin: 765,
};

async function auditDesktop(page, viewport) {
  await page.setViewportSize(viewport);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  return page.evaluate(({ width, height }) => {
    const order = document.getElementById('desktop-order-section');
    const included = document.querySelector('[data-node-id="280:102"]');
    const social = document.querySelector('[data-node-id="284:243"]');
    const faq = document.querySelector('[data-node-id="284:272"]');
    const hero = document.querySelector('.site-layout--desktop .hero-frame-bg');
    const scaledCanvas = document.querySelector('.desktop-block-canvas');

    function gapAfter(el) {
      if (!el || !el.nextElementSibling) return null;
      const a = el.getBoundingClientRect();
      const b = el.nextElementSibling.getBoundingClientRect();
      return Math.round(b.top - a.bottom);
    }

    return {
      kind: 'desktop',
      viewport: { width, height },
      horizontalOverflow:
        document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      heroDesktopPresent: hero != null,
      noScaledCanvasWrapper: scaledCanvas == null,
      orderHeight: order?.getBoundingClientRect().height ?? null,
      includedHeight: included?.getBoundingClientRect().height ?? null,
      socialHeight: social?.getBoundingClientRect().height ?? null,
      faqHeight: faq?.getBoundingClientRect().height ?? null,
      gapAfterOrder: gapAfter(order),
      gapAfterIncluded: gapAfter(included),
      gapAfterSocial: gapAfter(social),
    };
  }, viewport);
}

async function auditMobileWidth(page, width) {
  await page.setViewportSize({ width, height: 844 });
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(300);

  return page.evaluate((viewportWidth) => {
    const hero = document.querySelector('.hero-mobile');
    const heroRect = hero?.getBoundingClientRect();
    const badgeText = document.querySelector('.hero-mobile-badge-text');
    const sideGap =
      heroRect != null ? Math.max(0, Math.round((viewportWidth - heroRect.width) / 2)) : null;

    let badgeSingleLine = true;
    if (badgeText) {
      const style = getComputedStyle(badgeText);
      badgeSingleLine =
        style.whiteSpace === 'nowrap' &&
        badgeText.scrollWidth <= badgeText.clientWidth + 1;
    }

    return {
      kind: 'mobile',
      viewportWidth,
      heroWidth: heroRect?.width ?? null,
      sideGap,
      badgeSingleLine,
      badgeNowrap: badgeText ? getComputedStyle(badgeText).whiteSpace === 'nowrap' : null,
      horizontalOverflow:
        document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    };
  }, width);
}

function passDesktop(report) {
  const atReference = report.viewport.width >= 1440 && report.viewport.height >= 900;
  const heightsMatchFigma =
    Math.abs(report.orderHeight - FIGMA_HEIGHTS.order) <= 1 &&
    Math.abs(report.includedHeight - FIGMA_HEIGHTS.included) <= 1 &&
    Math.abs(report.socialHeight - FIGMA_HEIGHTS.social) <= 1 &&
    report.faqHeight != null &&
    report.faqHeight >= FIGMA_HEIGHTS.faqMin - 1;

  const noSectionGaps =
    (report.gapAfterOrder == null || report.gapAfterOrder <= 1) &&
    (report.gapAfterIncluded == null || report.gapAfterIncluded <= 1) &&
    (report.gapAfterSocial == null || report.gapAfterSocial <= 1);

  return (
    report.heroDesktopPresent &&
    report.noScaledCanvasWrapper &&
    !report.horizontalOverflow &&
    noSectionGaps &&
    (atReference ? heightsMatchFigma : report.orderHeight != null && report.orderHeight > 0)
  );
}

function passMobile(report) {
  return (
    report.badgeSingleLine &&
    report.badgeNowrap &&
    report.sideGap <= 1 &&
    Math.abs(report.heroWidth - report.viewportWidth) <= 2 &&
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

  for (const viewport of DESKTOP_VIEWPORTS) {
    const report = await auditDesktop(page, viewport);
    const ok = passDesktop(report);
    allPass = allPass && ok;
    console.log(JSON.stringify({ ...report, pass: ok }));
  }

  for (const width of MOBILE_WIDTHS) {
    const report = await auditMobileWidth(page, width);
    const ok = passMobile(report);
    allPass = allPass && ok;
    console.log(JSON.stringify({ ...report, pass: ok }));
  }

  await browser.close();
  if (!allPass) process.exit(1);
})();
