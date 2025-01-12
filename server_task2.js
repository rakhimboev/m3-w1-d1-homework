const http = require("http");
const fs = require("fs");
const path = require("path");

const serveFile = (filePath, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.end("Server Error");
    } else {
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    serveFile(path.join(__dirname, "home.html"), res);
  } else if (url === "/about") {
    serveFile(path.join(__dirname, "about.html"), res);
  } else if (url === "/contact") {
    serveFile(path.join(__dirname, "contact.html"), res);
  } else {
    res.end("404 Not Found");
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running….`);
});
