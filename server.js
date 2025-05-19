import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3100;

const server = http.createServer((req, res) => {
  // Nustatome pagrindinį kelią į index.html
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // Gauname failo plėtinį
  const extname = String(path.extname(filePath)).toLowerCase();
  
  // MIME tipai
  const contentType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
  }[extname] || 'application/octet-stream';
  
  // Patikriname, ar failas egzistuoja
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Jei failas nerastas, grąžiname 404
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        // Serverio klaida
        res.writeHead(500);
        res.end(`Serverio klaida: ${err.code}`);
      }
    } else {
      // Sėkmingai grąžiname failą
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Serveris paleistas adresu http://localhost:${PORT}`);
});
