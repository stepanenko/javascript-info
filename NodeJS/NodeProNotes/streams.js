// Luckily both of the (req, res) arguments are streams, which means we
// can write this in a much better way using fs.createReadStream() instead of fs.readFile():
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let stream = fs.createReadStream(__dirname + '/data.txt');
  stream.pipe(res);
});

server.listen(8000, () => console.log('Server is on 8000...'));

// Here .pipe() takes care of listening for 'data' and 'end'
// events from the fs.createReadStream(). This code is not only cleaner,
// but now the data.txt file will be written to clients one chunk
// at a time immediately as they are received from the disk.
