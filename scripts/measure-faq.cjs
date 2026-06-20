const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3004', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(4000);

  const metrics = await page.evaluate(() => {
    const section = document.querySelector('[data-node-id="284:272"]');
    const sectionRect = section.getBoundingClientRect();
    const rel = (sel) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        x: +(r.x - sectionRect.x).toFixed(3),
        y: +(r.y - sectionRect.y).toFixed(3),
        w: +r.width.toFixed(3),
        h: +r.height.toFixed(3),
      };
    };

    const q1 = rel('[data-node-id="284:303"]');
    const div1 = rel('[data-node-id="284:305"]');
    const gap1 = q1 && div1 ? +(div1.y - (q1.y + q1.h)).toFixed(3) : null;

    return {
      section: { w: sectionRect.width, h: sectionRect.height },
      content: rel('[data-node-id="284:297"]'),
      title: rel('[data-node-id="284:299"]'),
      list: rel('[data-node-id="284:300"]'),
      q1,
      arrow1: rel('[data-node-id="284:304"]'),
      divider1: div1,
      gapQ1ToDivider: gap1,
      footer: rel('[data-node-id="284:321"]'),
      logo: rel('[data-node-id="284:322"]'),
      social: rel('[data-node-id="284:323"]'),
      legal: rel('[data-node-id="284:326"]'),
      support: rel('[data-node-id="284:330"]'),
    };
  });

  const figma = {
    section: { w: 1440, h: 765 },
    content: { x: 73.445, y: 161, w: 1273.079, h: 542.051 },
    title: { x: 102.633, y: 161, w: 360, h: 152 },
    list: { x: 523.118, y: 183, w: 838, h: 299 },
    q1: { x: 523.118, y: 183, w: 439, h: 23 },
    arrow1: { x: 1324.418, y: 186.997, w: 15.7, h: 15.005 },
    divider1: { x: 523.118, y: 237, w: 838, h: 0 },
    gapQ1ToDivider: 31,
    footer: { x: 73.445, y: 663, w: 1273.079, h: 40.051 },
    logo: { x: 73.445, y: 663, w: 153.079, h: 40.051 },
    social: { x: 321.524, y: 670.026, w: 78, h: 26 },
    legal: { x: 494.524, y: 675.026, w: 626, h: 16 },
    support: { x: 1215.524, y: 673.526, w: 131, h: 19 },
  };

  console.log('IMPLEMENTATION:');
  console.log(JSON.stringify(metrics, null, 2));
  console.log('\nFIGMA EXPECTED:');
  console.log(JSON.stringify(figma, null, 2));

  await browser.close();
})();
