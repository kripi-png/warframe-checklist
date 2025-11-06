import fs from 'node:fs';

const blocks = [];
for (let i = 0; i < blocks.length; i++) {
  const items = blocks[i].items;
  for (let j = 0; j < items.length; j++) {
    // biome-ignore  lint: /suspicious/noExplicitAny
    (<any>items[j]) = { id: `${i}_${j}`, ...items[j] };
  }
  blocks[i].items = items;
}

// write to file
fs.writeFileSync('./data.json', JSON.stringify(blocks, null, 2), 'utf-8');
