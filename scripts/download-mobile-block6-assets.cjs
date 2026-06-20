const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['mobile-block6-bubble.png', 'http://localhost:3845/assets/47844d0bf070c8bfced33c0fcaab7079911d2078.png'],
  ['mobile-block6-arrow.svg', 'http://localhost:3845/assets/ab8305059c67fc7b7393640b47deb6f7594c48d4.svg'],
  ['mobile-block6-divider.svg', 'http://localhost:3845/assets/32a36c67e11d5be6acdd2ee9310c886cec3ff35d.svg'],
  ['mobile-block6-logo.svg', 'http://localhost:3845/assets/08400f959b12c50f05293d5c8a4acf23dc6c92a8.svg'],
  ['mobile-block6-social-icons.svg', 'http://localhost:3845/assets/08819e50159d2545f8bb15bea350a914e935ef79.svg'],
  ['mobile-block6-support-icon.svg', 'http://localhost:3845/assets/40aa19607237badf656516d1b47c32c2e67f290e.svg'],
];

const SVG_FIXES = [
  ['mobile-block6-arrow.svg', '15.7', '15.005'],
  ['mobile-block6-divider.svg', '358', '1'],
  ['mobile-block6-logo.svg', '153.079', '40.051'],
  ['mobile-block6-social-icons.svg', '78', '26'],
  ['mobile-block6-support-icon.svg', '19', '19'],
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
