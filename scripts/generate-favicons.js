const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Patikriname, ar įdiegtas sharp modulis
try {
  require.resolve('sharp');
} catch (e) {
  console.log('Sharp modulis nerastas. Įdiegiame...');
  exec('npm install sharp', (error, stdout, stderr) => {
    if (error) {
      console.error(`Klaida įdiegiant sharp: ${error.message}`);
      return;
    }
    console.log('Sharp modulis sėkmingai įdiegtas.');
    console.log('Paleiskite skriptą dar kartą.');
    process.exit(0);
  });
  return;
}

// Patikriname, ar įdiegtas to-ico modulis
try {
  require.resolve('to-ico');
} catch (e) {
  console.log('to-ico modulis nerastas. Įdiegiame...');
  exec('npm install to-ico', (error, stdout, stderr) => {
    if (error) {
      console.error(`Klaida įdiegiant to-ico: ${error.message}`);
      return;
    }
    console.log('to-ico modulis sėkmingai įdiegtas.');
    console.log('Paleiskite skriptą dar kartą.');
    process.exit(0);
  });
  return;
}

const sharp = require('sharp');
const toIco = require('to-ico');

const publicDir = path.join(__dirname, '..', 'public');

// Konvertuojame favicon.svg į favicon.ico
async function generateFavicon() {
  try {
    // Konvertuojame SVG į PNG
    await sharp(path.join(publicDir, 'favicon.svg'))
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));

    await sharp(path.join(publicDir, 'favicon.svg'))
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));

    // Konvertuojame PNG į ICO
    const png16 = fs.readFileSync(path.join(publicDir, 'favicon-16x16.png'));
    const png32 = fs.readFileSync(path.join(publicDir, 'favicon-32x32.png'));

    toIco([png16, png32])
      .then(buf => {
        fs.writeFileSync(path.join(publicDir, 'favicon.ico'), buf);
        console.log('favicon.ico sukurtas sėkmingai');
      })
      .catch(err => {
        console.error('Klaida kuriant favicon.ico:', err);
      });
  } catch (error) {
    console.error('Klaida generuojant favicon:', error);
  }
}

// Konvertuojame apple-touch-icon.svg į apple-touch-icon.png
async function generateAppleTouchIcon() {
  try {
    await sharp(path.join(publicDir, 'apple-touch-icon.svg'))
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    
    console.log('apple-touch-icon.png sukurtas sėkmingai');
  } catch (error) {
    console.error('Klaida generuojant apple-touch-icon:', error);
  }
}

// Vykdome konvertavimą
generateFavicon();
generateAppleTouchIcon();
