const http = require("http");
const fs = require("fs");
const path = require("path");

// Helper function to serve HTML files
const serveFile = (filePath, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};

// Create the server
const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    serveFile(path.join(__dirname, "home.html"), res);
  } else if (url === "/about") {
    serveFile(path.join(__dirname, "about.html"), res);
  } else if (url === "/contact") {
    serveFile(path.join(__dirname, "contact.html"), res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Listen on port 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running….`);
});
