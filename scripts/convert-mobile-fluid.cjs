const fs = require('fs');
const path = require('path');

const FILES = [
  'src/components/HeroMobile.tsx',
  'src/components/MobileStepsSection.tsx',
  'src/components/MobileOrderSection.tsx',
  'src/components/MobileWhatsIncludedSection.tsx',
  'src/components/MobileSocialProofSection.tsx',
];

function convertArbitraryBracket(inner) {
  if (!inner.includes('px')) return inner;

  return inner
    .split('_')
    .map((part) => {
      const match = part.match(/^(-?[\d.]+)px$/);
      if (match) return `calc(${match[1]}*var(--mf))`;
      return part;
    })
    .join('_');
}

function convertContent(content) {
  let next = content
    .replace(/@\/components\/MobileScaleFrame/g, '@/components/MobileFluidSection')
    .replace(/\bMobileScaleFrame\b/g, 'MobileFluidSection')
    .replace(/\bw-\[390px\]/g, 'w-full');

  next = next.replace(/\[([^\]]+)\]/g, (match, inner) => {
    const converted = convertArbitraryBracket(inner);
    return converted === inner ? match : `[${converted}]`;
  });

  return next;
}

for (const relativePath of FILES) {
  const filePath = path.join(process.cwd(), relativePath);
  const original = fs.readFileSync(filePath, 'utf8');
  const converted = convertContent(original);
  fs.writeFileSync(filePath, converted, 'utf8');
  console.log(`Converted ${relativePath}`);
}
