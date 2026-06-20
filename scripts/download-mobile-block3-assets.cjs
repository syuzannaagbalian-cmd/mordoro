const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['mobile-block3-product.png', 'http://localhost:3845/assets/0a64079b7763ca95afd37f3eb970c15cb002ac91.png'],
  ['mobile-block3-discount-icon.svg', 'http://localhost:3845/assets/f7855e56d26b5eeb428a25259ec6d29c06ebe2af.svg'],
  ['mobile-block3-quantity-plus.svg', 'http://localhost:3845/assets/3a63245d129d3df5b78258403caa30bbecc7a1ad.svg'],
  ['mobile-block3-quantity-minus.svg', 'http://localhost:3845/assets/07e88206a37ea7d5f1e90b4b088d7f760c46c5f5.svg'],
  ['mobile-block3-cta-icon.svg', 'http://localhost:3845/assets/e23f5af531ad7f76991c1849e2b5c6a0a8f5f351.svg'],
  ['mobile-block3-dropdown-arrow-city.svg', 'http://localhost:3845/assets/29d99ec3023d19f3601a6b0bb6743ec186088501.svg'],
  ['mobile-block3-dropdown-arrow-branch.svg', 'http://localhost:3845/assets/514af5c74a700529c42daeac515b510ec10463c4.svg'],
  ['mobile-block3-apple-pay-icon.svg', 'http://localhost:3845/assets/347bb46962d063bcb7e1182e0eac35920b8d4a6f.svg'],
  ['mobile-block3-google-pay-icon.svg', 'http://localhost:3845/assets/df5ab65e458fac99db4ac65f58ebc32b7822ff81.svg'],
  ['mobile-block3-mastercard.svg', 'http://localhost:3845/assets/78610d3d992e94c10c84e37d03d13a26ebeb7606.svg'],
  ['mobile-block3-visa.svg', 'http://localhost:3845/assets/1df405bacef9cef97e11bbd755a0dc403d5beca7.svg'],
];

const SVG_FIXES = [
  ['mobile-block3-discount-icon.svg', '10.01', '11.653'],
  ['mobile-block3-quantity-plus.svg', '12.604', '12.604'],
  ['mobile-block3-quantity-minus.svg', '12.604', '1'],
  ['mobile-block3-cta-icon.svg', '25.405', '25.405'],
  ['mobile-block3-apple-pay-icon.svg', '14.555', '17.275'],
  ['mobile-block3-google-pay-icon.svg', '18.921', '18.921'],
  ['mobile-block3-mastercard.svg', '32.32', '25.093'],
  ['mobile-block3-visa.svg', '51.89', '16.756'],
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
