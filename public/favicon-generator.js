// Šis skriptas generuoja faviconus naudojant canvas
// Paleiskite jį su Node.js: node favicon-generator.js

const fs = require('fs');
const { createCanvas } = require('canvas');

// Dydžiai, kuriems generuosime faviconus
const sizes = [16, 32, 48, 64, 128, 192];

// Funkcija, kuri piešia faviconą
function drawFavicon(ctx, size) {
  // Fonas
  ctx.fillStyle = '#050510';
  ctx.beginPath();
  ctx.rect(0, 0, size, size);
  ctx.fill();
  
  // Skalės faktorius
  const scale = size / 512;
  
  // Holograminis tinklelis
  ctx.strokeStyle = '#00FFFF';
  ctx.globalAlpha = 0.3;
  ctx.lineWidth = Math.max(1 * scale, 0.5);
  
  // Horizontali linija
  ctx.beginPath();
  ctx.moveTo(size * 0.1, size * 0.5);
  ctx.lineTo(size * 0.9, size * 0.5);
  ctx.stroke();
  
  // Vertikali linija
  ctx.beginPath();
  ctx.moveTo(size * 0.5, size * 0.1);
  ctx.lineTo(size * 0.5, size * 0.9);
  ctx.stroke();
  
  // Stulpeliai
  ctx.globalAlpha = 1;
  const barPositions = [
    { x: 0.19, y: 0.5, width: 0.08, height: 0.23 },
    { x: 0.34, y: 0.42, width: 0.08, height: 0.31 },
    { x: 0.5, y: 0.58, width: 0.08, height: 0.15 },
    { x: 0.66, y: 0.34, width: 0.08, height: 0.39 },
    { x: 0.81, y: 0.46, width: 0.08, height: 0.27 }
  ];
  
  // Piešiame stulpelius
  barPositions.forEach(bar => {
    const x = bar.x * size;
    const y = bar.y * size;
    const width = bar.width * size;
    const height = bar.height * size;
    
    // Pagrindinis stulpelis
    ctx.fillStyle = '#94D2FF';
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
    
    // Švytintis efektas
    ctx.fillStyle = '#5CEFFF';
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.fill();
    ctx.globalAlpha = 1;
  });
  
  // Linija virš stulpelių
  ctx.strokeStyle = '#9B6DFF';
  ctx.lineWidth = Math.max(4 * scale, 1);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(barPositions[0].x * size + (barPositions[0].width * size / 2), barPositions[0].y * size);
  
  for (let i = 1; i < barPositions.length; i++) {
    const x = barPositions[i].x * size + (barPositions[i].width * size / 2);
    const y = barPositions[i].y * size;
    ctx.lineTo(x, y);
  }
  
  ctx.stroke();
  
  // Švytinti linija
  ctx.strokeStyle = '#B026FF';
  ctx.lineWidth = Math.max(2 * scale, 0.5);
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.moveTo(barPositions[0].x * size + (barPositions[0].width * size / 2), barPositions[0].y * size);
  
  for (let i = 1; i < barPositions.length; i++) {
    const x = barPositions[i].x * size + (barPositions[i].width * size / 2);
    const y = barPositions[i].y * size;
    ctx.lineTo(x, y);
  }
  
  ctx.stroke();
  ctx.globalAlpha = 1;
  
  // Taškai linijos viršūnėse
  barPositions.forEach(bar => {
    const x = bar.x * size + (bar.width * size / 2);
    const y = bar.y * size;
    const radius = Math.max(3 * scale, 1);
    
    // Pagrindinis taškas
    ctx.fillStyle = '#7C3AED';
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Švytintis efektas
    ctx.fillStyle = '#B026FF';
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  });
}

// Generuojame faviconus
sizes.forEach(size => {
  console.log(`Generating favicon-${size}x${size}.png...`);
  
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  drawFavicon(ctx, size);
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/favicon-${size}x${size}.png`, buffer);
});

// Generuojame Apple Touch Icon
console.log('Generating apple-touch-icon.png...');
const canvas = createCanvas(180, 180);
const ctx = canvas.getContext('2d');
drawFavicon(ctx, 180);
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('public/apple-touch-icon.png', buffer);

console.log('Done!');