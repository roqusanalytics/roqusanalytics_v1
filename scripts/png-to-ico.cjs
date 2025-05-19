const fs = require('fs');
const path = require('path');
const toIco = require('to-ico');

async function convertPngToIco() {
  try {
    console.log('Starting PNG to ICO conversion...');
    
    // Paths
    const publicDir = path.join(__dirname, '..', 'public');
    const favicon16Path = path.join(publicDir, 'favicon-16x16.png');
    const favicon32Path = path.join(publicDir, 'favicon-32x32.png');
    const icoPath = path.join(publicDir, 'favicon.ico');
    
    // Check if PNG files exist
    if (!fs.existsSync(favicon16Path) || !fs.existsSync(favicon32Path)) {
      console.error('Error: favicon PNG files not found in public directory');
      return;
    }
    
    // Read PNG files
    const png16 = fs.readFileSync(favicon16Path);
    const png32 = fs.readFileSync(favicon32Path);
    
    // Convert PNGs to ICO
    console.log('Converting to ICO...');
    const icoBuffer = await toIco([png16, png32]);
    
    // Save ICO file
    fs.writeFileSync(icoPath, icoBuffer);
    
    console.log('ICO conversion complete!');
    console.log(`ICO file saved to: ${icoPath}`);
  } catch (error) {
    console.error('Error converting PNG to ICO:', error);
  }
}

convertPngToIco();
