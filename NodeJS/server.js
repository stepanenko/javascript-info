
const http = require('http');

const server = http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/') {
    response.end('Home Page');
  } else if (request.url === '/about') {
    response.end('About page');
  } else {
    response.statusCode = 404;
    response.end('not found');
  }
});

server.listen(3000, () => console.log('server is on ...'));
