const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1032 } });
  await page.goto('http://localhost:3003', { waitUntil: 'networkidle', timeout: 90000 });

  const rules = await page.evaluate(() => {
    const img = document.querySelector('.hero-bg-image');
    const sheets = [...document.styleSheets];
    const found = [];
    for (const sheet of sheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText && rule.selectorText.includes('hero-bg')) {
            found.push({ selector: rule.selectorText, css: rule.cssText });
          }
        }
      } catch (e) {
        found.push({ error: String(e) });
      }
    }
    return { found, inline: img?.getAttribute('style') };
  });

  console.log(JSON.stringify(rules, null, 2));
  await browser.close();
})();
