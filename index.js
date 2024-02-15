const http = require('http');
const url = require('url');
const fs = require('fs');
const myURL = 'http://localhost:8080';

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    const filename = {
        '/': 'index.html',
        '/about': 'about.html',
        '/contact-me': 'contact-me.html'
    }
    console.log(filename[q.pathname], 'this is filename')
    fs.readFile(filename[q.pathname], 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'})
          return res.end('404 not found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
      });
   }).listen(8080);
   console.log('Server running at http://localhost:8080');