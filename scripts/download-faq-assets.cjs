const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['faq-bubble.png', 'http://localhost:3845/assets/47844d0bf070c8bfced33c0fcaab7079911d2078.png'],
  ['faq-bg-ellipse.svg', 'http://localhost:3845/assets/abbe91462011cf3171fb02a6660776f5049b1c3e.svg'],
  ['faq-arrow.svg', 'http://localhost:3845/assets/ab8305059c67fc7b7393640b47deb6f7594c48d4.svg'],
  ['faq-divider.svg', 'http://localhost:3845/assets/2b172f97361c8c2c95595674b0bdd6a67335fe22.svg'],
  ['faq-logo.svg', 'http://localhost:3845/assets/08400f959b12c50f05293d5c8a4acf23dc6c92a8.svg'],
  ['faq-social-icons.svg', 'http://localhost:3845/assets/08819e50159d2545f8bb15bea350a914e935ef79.svg'],
  ['faq-support-icon.svg', 'http://localhost:3845/assets/40aa19607237badf656516d1b47c32c2e67f290e.svg'],
];

const SVG_FIXES = [
  ['faq-bg-ellipse.svg', null, null],
  ['faq-arrow.svg', '15.7', '15.005'],
  ['faq-divider.svg', null, null],
  ['faq-logo.svg', '153.079', '40.0515'],
  ['faq-social-icons.svg', '78', '26'],
  ['faq-support-icon.svg', '19', '19'],
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
    if (name === 'faq-logo.svg') {
      svg = svg.replace(
        /preserveAspectRatio="none" width="100%" height="100%"/,
        'preserveAspectRatio="xMinYMin meet" width="153.079" height="40.0515"'
      );
    }
    fs.writeFileSync(svgPath, svg);
  }

  console.log('done');
})();
