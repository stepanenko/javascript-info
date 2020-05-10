
const http = require('http');
const port = process.env.PORT || 5050;
const server = http.createServer((req, res) => {
  res.end('Hello');
});


server.listen(port, () => console.log('Server is on'));


// request provides the request details. Through it, we access the request headers and request data.
// response is used to populate the data we're going to return to the client.