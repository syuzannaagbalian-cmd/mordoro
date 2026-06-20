const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['mobile-block5-pagination-dots.svg', 'http://localhost:3845/assets/b4e6c28f26ec302b51f68b82f6d4bb6fcb5b9da2.svg'],
  ['mobile-block5-cta-circle.svg', 'http://localhost:3845/assets/964bbb44a526755138f240871ca61ed4b3feb293.svg'],
];

const SVG_FIXES = [
  ['mobile-block5-pagination-dots.svg', '39', '6'],
  ['mobile-block5-cta-circle.svg', '48', '48'],
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
