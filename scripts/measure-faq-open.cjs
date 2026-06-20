const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3004', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const closed = await page.evaluate(() => {
    const q = document.querySelector('[data-node-id="284:303"]');
    const arrow = document.querySelector('[data-node-id="284:304"] img');
    const cs = (el) => (el ? getComputedStyle(el) : null);
    const qcs = cs(q);
    const acs = cs(arrow);
    return {
      question: {
        fontFamily: qcs?.fontFamily,
        fontSize: qcs?.fontSize,
        fontWeight: qcs?.fontWeight,
        lineHeight: qcs?.lineHeight,
        letterSpacing: qcs?.letterSpacing,
      },
      arrow: {
        width: arrow?.width,
        height: arrow?.height,
        transform: acs?.transform,
      },
    };
  });

  await page.locator('[data-node-id="284:302"]').click();
  await page.waitForTimeout(500);

  const open = await page.evaluate(() => {
    const section = document.querySelector('[data-node-id="284:272"]');
    const sectionRect = section.getBoundingClientRect();
    const rel = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: +(r.x - sectionRect.x).toFixed(3), y: +(r.y - sectionRect.y).toFixed(3), w: +r.width.toFixed(3), h: +r.height.toFixed(3) };
    };
    const arrow = document.querySelector('[data-node-id="284:304"] img');
    const answer = document.querySelector('#' + document.querySelector('[data-node-id="284:302"]').getAttribute('aria-controls') + ' p');
    const acs = getComputedStyle(arrow);
    const ans = getComputedStyle(answer);
    const q = rel('[data-node-id="284:303"]');
    const div = rel('[data-node-id="284:305"]');
    return {
      arrowTransform: acs.transform,
      answerTypography: {
        fontSize: ans.fontSize,
        letterSpacing: ans.letterSpacing,
        lineHeight: ans.lineHeight,
        fontFamily: ans.fontFamily,
      },
      answerBox: rel('[data-node-id="284:301"]'),
      gapQToDivider: q && div ? +(div.y - (q.y + q.h)).toFixed(3) : null,
    };
  });

  console.log('CLOSED:', JSON.stringify(closed, null, 2));
  console.log('OPEN:', JSON.stringify(open, null, 2));
  await browser.close();
})();
