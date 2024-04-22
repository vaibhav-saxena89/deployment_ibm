const http = require("http");
const url = require("url");
const cors=require("cors");
const requestHandler = (req, res) => {
  const Url = url.parse(req.url, true);

  if (req.method === 'GET') {
    if (Url.pathname === '/') {
      res.writeHead(200,{ 'Content-Type': 'application/octet-stream' });
     
    res.end("welcome to the defualt page of cloud computing class backend")
    } else if (Url.pathname === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('This is the about page, where you can see about us now explore it.');
    } else if (Url.pathname === '/contact') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Contact us at contactus@gmail.com');
    } else {
      // If route is not found
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  }
};

const server = http.createServer(requestHandler);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});