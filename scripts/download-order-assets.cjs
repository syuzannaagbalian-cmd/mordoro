const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['order-product-pack.png', 'http://localhost:3845/assets/0a64079b7763ca95afd37f3eb970c15cb002ac91.png'],
  ['order-discount-icon.svg', 'http://localhost:3845/assets/c060646ad9b28b36452c942a3a151ff0e2e2827f.svg'],
  ['order-quantity-plus.svg', 'http://localhost:3845/assets/fbb0497a9208f90510d3c6bbbbe43c02c01f1cdd.svg'],
  ['order-quantity-minus.svg', 'http://localhost:3845/assets/7064b1a0686be343586be270933b4597afb80f09.svg'],
  ['order-cta-icon.svg', 'http://localhost:3845/assets/73920e70eddf41d70706c6b25d9812c0fa97ac73.svg'],
  ['order-dropdown-arrow-city.svg', 'http://localhost:3845/assets/c95d71c05fc8b2d0465f449daf0803a95b676905.svg'],
  ['order-dropdown-arrow-branch.svg', 'http://localhost:3845/assets/0a891ff27ac6c60ebaa06f0b432bc9aabe46455d.svg'],
  ['order-apple-pay-icon.svg', 'http://localhost:3845/assets/aeb9c15d4eb4ad722676fbb44631452dca7e59b0.svg'],
  ['order-google-pay-icon.svg', 'http://localhost:3845/assets/6570cd7a122c90a243f9e05faeb9894843cc703f.svg'],
  ['order-visa.svg', 'http://localhost:3845/assets/155b6f44e9199ac37b02a844cf7310e52694e5e6.svg'],
  ['order-mastercard.svg', 'http://localhost:3845/assets/f9f9d997ee93bbf34c2c3b34a31607ab5ab4ffb1.svg'],
];

const outDir = path.join(__dirname, '..', 'public', 'assets');

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
  console.log('done');

  const svgFixes = [
    ['order-discount-icon.svg', '12.8881', '15.0021'],
    ['order-cta-icon.svg', '30.8828', '30.8828'],
    ['order-apple-pay-icon.svg', '17.6927', '21'],
    ['order-google-pay-icon.svg', '23', '23'],
    ['order-mastercard.svg', '39.2883', '30.487'],
    ['order-visa.svg', '63.0783', '20.3694'],
  ];

  for (const [name, width, height] of svgFixes) {
    const svgPath = path.join(outDir, name);
    let svg = fs.readFileSync(svgPath, 'utf8');
    svg = svg.replace(
      /preserveAspectRatio="none" width="100%" height="100%"/,
      `preserveAspectRatio="xMidYMid meet" width="${width}" height="${height}"`
    );
    fs.writeFileSync(svgPath, svg);
  }
})();
