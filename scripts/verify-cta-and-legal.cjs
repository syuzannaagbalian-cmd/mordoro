const { chromium } = require('playwright');

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const PRIVACY_POLICY_URL = '/legal/privacy-policy.pdf';
const OFFER_AGREEMENT_URL = '/legal/offer-agreement.pdf';

(async () => {
  let allPass = true;
  const results = [];

  function record(name, pass, details = {}) {
    allPass = allPass && pass;
    results.push({ name, pass, ...details });
  }

  async function runScrollTest(name, width, ctaSelector, targetId) {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1500);

    if (ctaSelector.includes('284:264') || ctaSelector.includes('312:')) {
      const isSocial = ctaSelector.includes('284:264') || page.locator(ctaSelector).count();
      if (ctaSelector.includes('284:264')) {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(400);
      }
    }

    await page.click(ctaSelector);
    await page.waitForTimeout(1200);

    const after = await page.evaluate((id) => ({
      targetTop: document.getElementById(id)?.getBoundingClientRect().top,
    }), targetId);

    const pass = after.targetTop != null && Math.abs(after.targetTop) < 80;
    record(name, pass, { targetTop: after.targetTop });
    await browser.close();
  }

  async function runLegalAndFooterChecks(width, prefix) {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1500);

    const legal = await page.evaluate(
      ({ privacyUrl, offerUrl }) => {
        const links = Array.from(document.querySelectorAll('a[href*="legal/"]'));
        const privacyLinks = links.filter((a) => a.getAttribute('href') === privacyUrl);
        const offerLinks = links.filter((a) => a.getAttribute('href') === offerUrl);
        const allLegalBlank = links.every(
          (a) => a.getAttribute('target') === '_blank' && a.getAttribute('rel')?.includes('noopener'),
        );
        const deliveryLink = Array.from(document.querySelectorAll('a')).find((a) =>
          a.textContent?.includes('Доставка та оплата'),
        );
        const disclaimerLink = Array.from(document.querySelectorAll('a')).find((a) =>
          a.textContent?.includes('політикою конфіденційності'),
        );
        return {
          privacyCount: privacyLinks.length,
          offerCount: offerLinks.length,
          allLegalBlank,
          deliveryAbsent: !deliveryLink,
          disclaimerHref: disclaimerLink?.getAttribute('href'),
          disclaimerTarget: disclaimerLink?.getAttribute('target'),
        };
      },
      { privacyUrl: PRIVACY_POLICY_URL, offerUrl: OFFER_AGREEMENT_URL },
    );

    record(`${prefix}-legal-links`, legal.privacyCount >= 1 && legal.offerCount >= 1 && legal.allLegalBlank, legal);
    record(`${prefix}-delivery-absent`, legal.deliveryAbsent, legal);
    record(
      `${prefix}-disclaimer-link`,
      legal.disclaimerHref === PRIVACY_POLICY_URL && legal.disclaimerTarget === '_blank',
      legal,
    );

    await browser.close();
  }

  async function runCustomCityBranchTest(width, prefix, orderSectionId) {
    const browser = await chromium.launch();
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto(BASE_URL, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(1500);

    const citySelector = width >= 768 ? '#order-city' : '#mobile-order-city';
    const branchSelector = width >= 768 ? '#order-branch' : '#mobile-order-branch';
    const nameSelector = width >= 768 ? '#order-name' : '#mobile-order-name';
    const phoneSelector = width >= 768 ? '#order-phone' : '#mobile-order-phone';
    const ctaSelector =
      width >= 768
        ? '#desktop-order-section .order-cta-btn'
        : '#mobile-order-section .mobile-order-cta-btn';

    await page.evaluate((id) => {
      document.getElementById(id)?.scrollIntoView({ block: 'center' });
    }, orderSectionId);
    await page.waitForTimeout(500);

    await page.fill(nameSelector, 'Test User');
    await page.fill(phoneSelector, '+380951234567');
    await page.fill(citySelector, 'Custom City');
    await page.fill(branchSelector, 'Custom Branch №99');

    let submitted = false;
    page.on('console', (msg) => {
      if (msg.text().includes('Order submitted')) submitted = true;
    });

    await page.click(ctaSelector);
    await page.waitForTimeout(500);

    record(`${prefix}-custom-city-branch`, submitted, { submitted });
    await browser.close();
  }

  await runScrollTest('desktop-hero-scroll', 1440, '[data-node-id="210:1338"]', 'desktop-order-section');
  await runScrollTest('mobile-hero-scroll', 390, '[data-node-id="312:1068"]', 'mobile-order-section');
  await runScrollTest('desktop-social-scroll', 1440, '[data-node-id="284:264"]', 'desktop-order-section');

  await runLegalAndFooterChecks(1440, 'desktop');
  await runLegalAndFooterChecks(390, 'mobile');

  await runCustomCityBranchTest(1440, 'desktop', 'desktop-order-section');
  await runCustomCityBranchTest(390, 'mobile', 'mobile-order-section');

  for (const result of results) {
    console.log(result.pass ? 'PASS' : 'FAIL', result.name, JSON.stringify(result));
  }

  if (!allPass) process.exit(1);
})();
