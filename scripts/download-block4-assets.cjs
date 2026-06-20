const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['block4-bubble.png', 'http://localhost:3845/assets/47844d0bf070c8bfced33c0fcaab7079911d2078.png'],
  ['block4-line.svg', 'http://localhost:3845/assets/ff9a7a296e878a1728fea8dc5122c6eebc6cf8ba.svg'],
  ['block4-dot.svg', 'http://localhost:3845/assets/2db8dfc7c5562c38cc55977b727779236bc3c927.svg'],
  ['block4-cta-circle.svg', 'http://localhost:3845/assets/964bbb44a526755138f240871ca61ed4b3feb293.svg'],
];

const SVG_FIXES = [
  ['block4-line.svg', null, null],
  ['block4-dot.svg', '6', '6'],
  ['block4-cta-circle.svg', '48', '48'],
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
