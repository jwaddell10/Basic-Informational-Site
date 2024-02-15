const http = require('http');
const url = require('url');
const fs = require('fs');



http.createServer(function (req, res) {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
          res.writeHead(404, {'Content-Type': 'text/html'})
          return res.end('404 not found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        return res.end();
      });
   }).listen(8080, 'localhost');
   console.log('Server running at http://localhost:8080');