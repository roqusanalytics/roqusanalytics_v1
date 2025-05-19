import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

// Get __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const svgPath = path.join(__dirname, '../public/favicon.svg');
const favicon16Path = path.join(__dirname, '../public/favicon-16x16.png');
const favicon32Path = path.join(__dirname, '../public/favicon-32x32.png');
const appleTouchIconPath = path.join(__dirname, '../public/apple-touch-icon.png');

// Read SVG file
const svgBuffer = fs.readFileSync(svgPath);

// Generate favicon-16x16.png
try {
  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(favicon16Path);
  console.log('favicon-16x16.png created successfully');
} catch (err) {
  console.error('Error creating favicon-16x16.png:', err);
}

// Generate favicon-32x32.png
try {
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(favicon32Path);
  console.log('favicon-32x32.png created successfully');
} catch (err) {
  console.error('Error creating favicon-32x32.png:', err);
}

// Generate apple-touch-icon.png
try {
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(appleTouchIconPath);
  console.log('apple-touch-icon.png created successfully');
} catch (err) {
  console.error('Error creating apple-touch-icon.png:', err);
}