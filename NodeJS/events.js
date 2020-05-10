
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (from, to) => {
  console.log('started from', from, 'to', to);
});

eventEmitter.emit('start', 5, 11); // will trigger 'start' event 

// console.log(what);

// once(): add a one-time listener
// removeListener() / off(): remove an event listener from an event
// removeAllListeners(): remove all listeners for an event
