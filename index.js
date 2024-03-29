const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const myURL = new URL("http://localhost:8080" + req.url);
    
    let filepath;
    switch (myURL.pathname) {
      case "/":
        filepath = "index.html";
        break;
      case "/about":
        filepath = "about.html";
        break;
      case "/contact-me":
        filepath = "contact-me.html";
        break;
      default:
        filepath = "404.html";
        break;
    }
    fs.readFile(filepath, "utf8", (err, data) => {
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