
// page 44

const print = (message) => log(message, new Date());
const log = (message, timestamp) => console.log(`${timestamp.toString()}: ${message}`);

module.exports = { print, log };
