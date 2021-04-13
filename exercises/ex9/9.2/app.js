const http = require('http');
const fs = require('fs');
const path = require('path');
const hostName = process.env.host || '127.0.0.1';
const port = process.env.port || '3000';

http
  .createServer((request, response) => {
    let filePath = request.url;
    // console.log(filePath);
    const filesList = fs.readdirSync('public/');
    // console.log(filesList);
    if (filePath === '/') {
      filePath = 'public/index.html';
    } else if (!filePath.includes('.')) {
      filePath =
        'public/' +
        filesList.find(
          (name) => name.split('.')[0] === request.url.split('/')[1]
        );
    }
    // console.log(filePath);
    //extname returns dile endings\types.
    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.woff': 'application/font-woff',
      '.ttf': 'application/font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'application/font-otf',
      '.wasm': 'application/wasm',
      '.ico': 'image/x-icon',
    };

    let contentType = mimeTypes[extname];
    fs.readFile(filePath, function (error, content) {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    });
  })
  .listen(port);
console.log(`Server running at http://${hostName}:${port}/`);
