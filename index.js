const http = require("http");
const url = require("node:url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const myURL = new URL("http://localhost:8080" + req.url);
    console.log(myURL.pathname, "this is myurlpath");
    const pathways = {
      "/": "index.html",
      "/about": "about.html",
      "/contact-me": "contact-me.html",
    };
    fs.readFile(pathways[myURL.pathname], "utf8", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("404 not found");
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
console.log("Server running at http://localhost:8080");
