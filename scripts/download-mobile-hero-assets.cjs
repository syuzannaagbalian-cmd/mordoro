const fs = require('fs');
const path = require('path');
const http = require('http');

const ASSETS = [
  ['mobile-background.png', 'http://localhost:3845/assets/b1fe135486cd1c25d49e1c016c5055d6169a4048.png'],
  ['mobile-ellipse-bottom.svg', 'http://localhost:3845/assets/4f02b5c8419450a8c2e5c325f36cb744aad24bb6.svg'],
  ['mobile-logo.svg', 'http://localhost:3845/assets/b53d669b5505269852cb60de7610d7602228bb3d.svg'],
  ['mobile-support-icon.svg', 'http://localhost:3845/assets/559913cff3cf7399e4e5b150704b4c02ae8ed244.svg'],
  ['mobile-badge-icon.svg', 'http://localhost:3845/assets/e86fdb534d879ce12edcfa036d08021d0252a4cf.svg'],
  ['mobile-feature-icon-click.svg', 'http://localhost:3845/assets/e8d3241f82c392edf01dbef5764fd8a6163609c1.svg'],
  ['mobile-feature-icon-reuse.svg', 'http://localhost:3845/assets/4815f2c84bb44342151277bb23f5bba149912a7c.svg'],
  ['mobile-feature-icon-seal.svg', 'http://localhost:3845/assets/2b808ee91af322eeebc4ef4c3e48cfd505c4d082.svg'],
  ['mobile-button-circle.svg', 'http://localhost:3845/assets/043578565fcb0872d931a6727468f8aa8a93d4b1.svg'],
  ['mobile-arrow.svg', 'http://localhost:3845/assets/722bc6b8481639489d00e0fbe5e2ae8a4b8d7582.svg'],
  ['mobile-stars.svg', 'http://localhost:3845/assets/9f70e05e8e05051a35215bd320d41b2238f271ee.svg'],
  ['mobile-tiktok.svg', 'http://localhost:3845/assets/c37378cb7b1fcd7bec31de78404765a70ce44abd.svg'],
  ['mobile-instagram.svg', 'http://localhost:3845/assets/a46af4c02ee2e2b226fc474593cff3632841828f.svg'],
  ['mobile-avatar-1.png', 'http://localhost:3845/assets/dff6fa710fb6740227588e613b975caf94415f27.png'],
  ['mobile-avatar-2.png', 'http://localhost:3845/assets/b03167b93a5be469efb4d5c733d74bf1c0936e09.png'],
  ['mobile-avatar-3.png', 'http://localhost:3845/assets/4c14ef03cdaf4e1d6fc09511fea326769d8597de.png'],
  ['mobile-avatar-4.png', 'http://localhost:3845/assets/11c90fd9c8b33ecad2db0fae9a29f69b401b4a1c.png'],
];

const SVG_FIXES = [
  ['mobile-ellipse-bottom.svg', '526', '190'],
  ['mobile-logo.svg', '83.458', '21.836'],
  ['mobile-support-icon.svg', '10.359', '10.359'],
  ['mobile-badge-icon.svg', '12.92', '13.6'],
  ['mobile-feature-icon-click.svg', '14.995', '13.633'],
  ['mobile-feature-icon-reuse.svg', '42.943', '42.943'],
  ['mobile-feature-icon-seal.svg', '42.943', '42.943'],
  ['mobile-button-circle.svg', '33', '33'],
  ['mobile-arrow.svg', '12.618', '14.3'],
  ['mobile-stars.svg', '106.388', '17.194'],
  ['mobile-tiktok.svg', '14.706', '17.146'],
  ['mobile-instagram.svg', '19.118', '19.118'],
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
    const viewBoxMatch = svg.match(/viewBox="([^"]+)"/);
    if (!viewBoxMatch) continue;
    svg = svg.replace(
      /preserveAspectRatio="none" width="100%" height="100%"/,
      `preserveAspectRatio="xMidYMid meet" width="${width}" height="${height}"`
    );
    if (name === 'mobile-logo.svg') {
      svg = svg.replace(
        /preserveAspectRatio="xMidYMid meet" width="[^"]+" height="[^"]+"/,
        'preserveAspectRatio="xMinYMin meet" width="83.458" height="21.836"'
      );
    }
    fs.writeFileSync(svgPath, svg);
  }

  console.log('done');
})();
