const fs = require('fs');
const path = require('path');
const https = require('http');

const ASSETS = [
  ['background.png', 'http://localhost:3845/assets/8741587949d29fd2f94cbb1e53f91a179295f7c3.png'],
  ['avatar-1.png', 'http://localhost:3845/assets/9f0a5568f4abb552cf248d052e02c0c182daf863.png'],
  ['avatar-2.png', 'http://localhost:3845/assets/5ede83e8607e9c6518108af5148ea69629a4e46d.png'],
  ['avatar-3.png', 'http://localhost:3845/assets/96b169edf3b1a04371ae2504b60e56288e893232.png'],
  ['avatar-4.png', 'http://localhost:3845/assets/fee6e0b080a6fe6c98c2ec5bb274b4c4397570e2.png'],
  ['badge-icon.svg', 'http://localhost:3845/assets/8bce912a3ff22bffa66260b69a12009421b5f6e4.svg'],
  ['morldoro-logo.svg', 'http://localhost:3845/assets/94725eb45e93975afd6990341e9edebbcb6b325d.svg'],
  ['support-icon.svg', 'http://localhost:3845/assets/27793f369497f003edf601244b13b2e75d844b8b.svg'],
  ['button-circle.svg', 'http://localhost:3845/assets/1267cf4fa6bd5ce5d6b108a774b8e49fd26d816b.svg'],
  ['arrow.svg', 'http://localhost:3845/assets/3a8ff6310dfbefa35f1ef25f2a3563bd626d5df5.svg'],
  ['star-full.svg', 'http://localhost:3845/assets/2a9a309ce95297518e384331e917268cf916d0a1.svg'],
  ['star-half.svg', 'http://localhost:3845/assets/c3c53c6ee02c620c3f699554e138de3e75eab6fb.svg'],
  ['tiktok.svg', 'http://localhost:3845/assets/1ffc67ec8d052f7f33ab624a92eb11a56a2c2dd2.svg'],
  ['instagram.svg', 'http://localhost:3845/assets/aae6290945ed262f07a583458078670b2d2113de.svg'],
  ['step-divider.svg', 'http://localhost:3845/assets/cc022115fdbb1998c60716d769516a7909ee6947.svg'],
  ['feature-line-click.svg', 'http://localhost:3845/assets/1e86916f9375c50a3637857aa8f5951bc1dd4d30.svg'],
  ['feature-icon-click.svg', 'http://localhost:3845/assets/d79688f2bd04af8d5824f16ed0e9fa746b726a89.svg'],
  ['feature-line-seal.svg', 'http://localhost:3845/assets/6475d3f622ac56b4ebb912bf8f7bc45e210303c8.svg'],
  ['feature-icon-seal.svg', 'http://localhost:3845/assets/414dd35bddb53d46c414619e0a51bd65e5790080.svg'],
  ['feature-line-reuse.svg', 'http://localhost:3845/assets/2d76f7112f2da96b495f69b22254f0ecf7bacd93.svg'],
  ['feature-icon-reuse.svg', 'http://localhost:3845/assets/1551f26b7f84836c205aed86b41591219b6cbec4.svg'],
];

const outDir = path.join(__dirname, '..', 'public', 'assets');
fs.mkdirSync(outDir, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    require('http')
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
    const stat = fs.statSync(dest);
    console.log(`saved ${name} (${stat.size} bytes)`);
  }
  console.log('done');

  const logoPath = path.join(outDir, 'morldoro-logo.svg');
  let logo = fs.readFileSync(logoPath, 'utf8');
  logo = logo.replace(
    /preserveAspectRatio="none" width="100%" height="100%"/,
    'preserveAspectRatio="xMinYMin meet" width="153.079" height="40.0515"'
  );
  fs.writeFileSync(logoPath, logo);
})();
