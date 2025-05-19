import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pngToIco from 'png-to-ico';

// Get current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const favicon16Path = path.join(__dirname, '../public/favicon-16x16.png');
const favicon32Path = path.join(__dirname, '../public/favicon-32x32.png');
const icoPath = path.join(__dirname, '../public/favicon.ico');

// Convert PNG to ICO
try {
  const pngFiles = [favicon16Path, favicon32Path];
  const icoBuffer = await pngToIco(pngFiles);
  
  // Write ICO file
  fs.writeFileSync(icoPath, icoBuffer);
  console.log('favicon.ico created successfully');
} catch (err) {
  console.error('Error creating favicon.ico:', err);
}