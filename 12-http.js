const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page")
  }
  if (req.url === "/about") {
    res.end("here is our short history")
  }
  res.end(`
    <h1>Oops</h1>
    <p>The requested URL ${req.url} was not found.</p>
    <a href="/">Go to Home</a>
  `);
});

server.listen(5000, () =>{
  console.log("Server is running on port 5000");  // Server is listening on port 5000. The server will respond to incoming requests at http://localhost:5000/
} );
