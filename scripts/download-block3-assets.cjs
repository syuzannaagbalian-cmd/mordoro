const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['block3-product-composition.png', 'http://localhost:3845/assets/96b5ecfc2d6b6669aa994d881bde025253664864.png'],
  ['block3-bg-ellipse.svg', 'http://localhost:3845/assets/d2d88aa71a45749ea48af06c4b317255d04e5fff.svg'],
  ['block3-heading-arrow.svg', 'http://localhost:3845/assets/5432a7b8befdb378b96d10c93da8f2fdab2d0385.svg'],
  ['block3-feature-icon-pack.svg', 'http://localhost:3845/assets/9d8ae4b25969d98984993bef4931f5000d46b449.svg'],
  ['block3-feature-icon-cigarettes.svg', 'http://localhost:3845/assets/e7963bec095b55860beef18028c3434158ad57d3.svg'],
  ['block3-feature-icon-jar.svg', 'http://localhost:3845/assets/acf1597ae9fd06451819e46a8e35d8c5fe6c0462.svg'],
  ['block3-feature-divider.svg', 'http://localhost:3845/assets/1ebfecc7f4a85c9477ef1cbabd2690b4d4ed0fc3.svg'],
  ['block3-feature-icon-solution.svg', 'http://localhost:3845/assets/5cfa251dc26c6b23dc620b98ffd97b86f2327404.svg'],
];

const SVG_FIXES = [
  ['block3-bg-ellipse.svg', null, null],
  ['block3-heading-arrow.svg', '23', '35.3753'],
  ['block3-feature-icon-pack.svg', '63', '63'],
  ['block3-feature-icon-cigarettes.svg', '63', '63'],
  ['block3-feature-icon-jar.svg', '63', '63'],
  ['block3-feature-divider.svg', '21', '26.269'],
  ['block3-feature-icon-solution.svg', '63', '63'],
];

const outDir = path.join(__dirname, '..', 'public', 'assets');
fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    http
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`${url} -> ${res.statusCode}`));
          return;
        }
        res.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', reject);
  });
}

(async () => {
  for (const [name, url] of ASSETS) {
    const dest = path.join(outDir, name);
    await download(url, dest);
    console.log(`saved ${name} (${fs.statSync(dest).size} bytes)`);
  }

  for (const [name, width, height] of SVG_FIXES) {
    const svgPath = path.join(outDir, name);
    let svg = fs.readFileSync(svgPath, 'utf8');
    const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
    if (!viewBoxMatch) continue;
    const [, , , vbW, vbH] = viewBoxMatch[1].split(/\s+/);
    const w = width ?? vbW;
    const h = height ?? vbH;
    svg = svg.replace(
      /preserveAspectRatio="none" width="100%" height="100%"/,
      `preserveAspectRatio="xMidYMid meet" width="${w}" height="${h}"`
    );
    fs.writeFileSync(svgPath, svg);
  }

  console.log('done');
})();
