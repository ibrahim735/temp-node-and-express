const http = require("http");
const { forEach } = require("lodash");

const server = http.createServer((req, res) => {
  if (res.url === "/") {
    res.end("home page");
  }
  if (req.url === "/about") {
    res.end("about page");
    // blocking code
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
  }
  res.end("error page");
});

server.listen(5000, () => {
  console.log("Server is running on port 5000");
});
