import puppeteer from 'puppeteer';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const htmlPath = resolve(__dirname, 'generate-cv.html');
const outputPath = resolve(__dirname, '../public/IRAKOZE_Nicky_CV.pdf');

const html = readFileSync(htmlPath, 'utf8');

const browser = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();

// Load HTML with base URL so relative assets resolve
await page.setContent(html, {
  waitUntil: 'networkidle0',
  timeout: 30000,
});

// Wait a moment for Google Fonts to load (if network available)
await new Promise(r => setTimeout(r, 1500));

await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0mm', bottom: '0mm', left: '0mm', right: '0mm' },
  preferCSSPageSize: false,
});

await browser.close();
console.log('✅ PDF generated at:', outputPath);
