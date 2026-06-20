const fs = require('fs');
const path = require('path');

const transcriptPath = path.join(
  process.env.USERPROFILE || '',
  '.cursor',
  'projects',
  'c-mordoro-site',
  'agent-transcripts',
  '99043a22-7d7a-4aa5-9432-33f88ec7f76f',
  '99043a22-7d7a-4aa5-9432-33f88ec7f76f.jsonl'
);

const heroPath = 'C:\\mordoro-site\\src\\components\\Hero.tsx';
const stopBeforeLine = 317; // before mobile HeroMobile import

let content = null;
const lines = fs.readFileSync(transcriptPath, 'utf8').split(/\r?\n/);

for (let i = 0; i < lines.length; i++) {
  const lineNum = i + 1;
  if (lineNum >= stopBeforeLine) break;
  if (!lines[i].trim()) continue;
  let obj;
  try {
    obj = JSON.parse(lines[i]);
  } catch {
    continue;
  }
  const items = obj.message?.content || [];
  for (const item of items) {
    if (item.type !== 'tool_use') continue;
    const inp = item.input || {};
    if (inp.path !== heroPath) continue;
    if (item.name === 'Write' && inp.contents != null) {
      content = inp.contents;
      console.log(`Line ${lineNum}: Write (${content.length} chars)`);
    } else if (item.name === 'StrReplace' && content != null) {
      const { old_string, new_string } = inp;
      if (content.includes(old_string)) {
        content = content.replace(old_string, new_string);
        console.log(`Line ${lineNum}: StrReplace ok`);
      } else {
        console.log(`Line ${lineNum}: StrReplace FAILED - old_string not found`);
      }
    }
  }
}

if (!content) {
  console.error('No Hero.tsx content found');
  process.exit(1);
}

const outPath = path.join(__dirname, '..', 'src', 'components', '_extracted_Hero.tsx');
fs.writeFileSync(outPath, content);
console.log('Written to', outPath);
console.log('Lines:', content.split('\n').length);
