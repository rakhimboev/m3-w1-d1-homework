const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.end("homepage!");
  } else if (url === "/about") {
    res.end("About page.");
  } else if (url === "/contact") {
    res.end("Contact page.");
  } else {
    res.end("Invalid Request!");
  }
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`The NodeJS server on port ${PORT} is now running….`);
});
