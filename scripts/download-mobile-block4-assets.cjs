const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['mobile-block4-composition.png', 'http://localhost:3845/assets/96b5ecfc2d6b6669aa994d881bde025253664864.png'],
  ['mobile-block4-heading-arrow.svg', 'http://localhost:3845/assets/e685a9c42b1fe2e04eaba7d3b9a653237ccf76da.svg'],
  ['mobile-block4-icon-pack.svg', 'http://localhost:3845/assets/9d8ae4b25969d98984993bef4931f5000d46b449.svg'],
  ['mobile-block4-icon-cigarettes.svg', 'http://localhost:3845/assets/424b6c5042517c7f83d0e238154d2a7416aaa58a.svg'],
  ['mobile-block4-icon-jar.svg', 'http://localhost:3845/assets/acf1597ae9fd06451819e46a8e35d8c5fe6c0462.svg'],
  ['mobile-block4-feature-divider.svg', 'http://localhost:3845/assets/1ebfecc7f4a85c9477ef1cbabd2690b4d4ed0fc3.svg'],
  ['mobile-block4-icon-solution.svg', 'http://localhost:3845/assets/5cfa251dc26c6b23dc620b98ffd97b86f2327404.svg'],
];

const SVG_FIXES = [
  ['mobile-block4-heading-arrow.svg', '18.5', '1'],
  ['mobile-block4-icon-pack.svg', '63', '63'],
  ['mobile-block4-icon-cigarettes.svg', '63', '63'],
  ['mobile-block4-icon-jar.svg', '63', '63'],
  ['mobile-block4-feature-divider.svg', '21', '26.269'],
  ['mobile-block4-icon-solution.svg', '63', '63'],
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
    if (!fs.existsSync(svgPath)) continue;
    let svg = fs.readFileSync(svgPath, 'utf8');
    svg = svg.replace(
      /preserveAspectRatio="none" width="100%" height="100%"/,
      `preserveAspectRatio="xMidYMid meet" width="${width}" height="${height}"`
    );
    fs.writeFileSync(svgPath, svg);
  }

  console.log('done');
})();
