const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['mobile-block2-bubble.png', 'http://localhost:3845/assets/47844d0bf070c8bfced33c0fcaab7079911d2078.png'],
  ['mobile-block2-ellipse.svg', 'http://localhost:3845/assets/608847ec289bf2fd85c38ea5b95455bd0ef17927.svg'],
  ['mobile-block2-line-32.svg', 'http://localhost:3845/assets/3133890916b5b7482d120ed5025187a886376e05.svg'],
  ['mobile-block2-line-33.svg', 'http://localhost:3845/assets/7a4ff0804d52882113b2d3aad1f38fac6c204372.svg'],
];

const SVG_FIXES = [
  ['mobile-block2-ellipse.svg', '443', '190'],
  ['mobile-block2-line-32.svg', '23.022', '1'],
  ['mobile-block2-line-33.svg', '23.022', '1'],
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
