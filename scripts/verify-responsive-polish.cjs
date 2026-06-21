const { chromium } = require('playwright');

const DESKTOP_VIEWPORTS = [
  { width: 1280, height: 720 },
  { width: 1366, height: 768 },
  { width: 1440, height: 900 },
  { width: 1536, height: 1080 },
  { width: 1920, height: 1080 },
];

const MOBILE_WIDTHS = [320, 375, 390, 414, 430];

async function auditDesktop(page, viewport) {
  await page.setViewportSize(viewport);
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  return page.evaluate(({ width, height }) => {
    const hero = document.querySelector('.site-layout--desktop .hero-frame-bg');
    const order = document.getElementById('desktop-order-section');
    const orderCanvas = order?.querySelector('.desktop-block-canvas');
    const included = document.querySelector('.desktop-block--included');
    const social = document.querySelector('.desktop-block--social');
    const faq = document.querySelector('.desktop-block--faq');
    const badgeText = document.querySelector('.hero-mobile-badge-text');

    const nestedVerticalScrollers = [];
    for (const el of document.querySelectorAll('.site-layout--mobile *')) {
      const style = getComputedStyle(el);
      if (style.display === 'none') continue;
      if (el.classList.contains('mobile-block5-gallery-track')) continue;
      const oy = style.overflowY;
      if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) {
        nestedVerticalScrollers.push(el.className);
      }
    }

    const mobileHero = document.querySelector('.hero-mobile');
    const mobileHeroRect = mobileHero?.getBoundingClientRect();

    return {
      kind: 'desktop',
      viewport: { width, height },
      horizontalOverflow:
        document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      heroDesktopUntouched: hero != null,
      orderHeight: order?.getBoundingClientRect().height ?? null,
      orderCanvasHeight: orderCanvas?.getBoundingClientRect().height ?? null,
      includedHeight: included?.getBoundingClientRect().height ?? null,
      socialHeight: social?.getBoundingClientRect().height ?? null,
      faqHeight: faq?.getBoundingClientRect().height ?? null,
      badgeTextNowrap: badgeText ? getComputedStyle(badgeText).whiteSpace === 'nowrap' : null,
      mobileHeroWidth: mobileHeroRect?.width ?? null,
      nestedMobileScrollers: nestedVerticalScrollers.length,
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

    let badgeLines = 1;
    if (badgeText) {
      const lineHeight = parseFloat(getComputedStyle(badgeText).lineHeight) || 1;
      const textHeight = badgeText.getBoundingClientRect().height;
      badgeLines = lineHeight > 0 ? Math.round(textHeight / lineHeight) : 1;
    }

    return {
      kind: 'mobile',
      viewportWidth,
      heroWidth: heroRect?.width ?? null,
      sideGap,
      badgeSingleLine: badgeLines <= 1,
      badgeNowrap: badgeText ? getComputedStyle(badgeText).whiteSpace === 'nowrap' : null,
      horizontalOverflow:
        document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    };
  }, width);
}

function passDesktop(report) {
  const scale = Math.min(1, report.viewport.width / 1440, report.viewport.height / 900);
  const expectedOrder = Math.round(809 * scale);
  const orderOk =
    report.orderHeight != null && Math.abs(report.orderHeight - expectedOrder) <= 3;
  return (
    report.heroDesktopUntouched &&
    orderOk &&
    !report.horizontalOverflow &&
    report.orderCanvasHeight != null &&
    report.orderCanvasHeight <= report.orderHeight + 1
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
