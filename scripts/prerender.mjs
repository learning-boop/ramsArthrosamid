// Inserts the server-rendered markup of each page into the built HTML (dist/).
// The browser then replaces it with the live React app (see src/main.jsx and src/book.jsx).
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssr = path.resolve('dist-ssr/entry-server.js');
const { pages } = await import(pathToFileURL(ssr).href);

for (const [file, render] of Object.entries(pages)) {
  const target = path.join(dist, file);
  const html = fs.readFileSync(target, 'utf8');
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error(`${file}: root marker not found`);
  fs.writeFileSync(target, html.replace(marker, `<div id="root">${render()}</div>`));
  console.log(`prerendered ${file}`);
}
fs.rmSync(path.resolve('dist-ssr'), { recursive: true, force: true });
