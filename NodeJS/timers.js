
let co = 0;

const id = setInterval(() => {
  // runs every 500 miliseconds
  console.log(co++);
}, 500);

setTimeout(() => {
  clearInterval(id);
}, 2000);

// A setTimeout() callback with a 0ms delay is very similar to setImmediate().
// The execution order will depend on various factors,
// but they will be both run in the next iteration of the event loop.
setImmediate(() => {
  console.log('immediate');
});

// nextTick() is going to be executed on the current iteration of the event loop,
// after the current operation ends. This means it will always execute before setTimeout and setImmediate.
process.nextTick(() => {
  console.log('next tick');
});

// => next tick, immediate, 0, 1, 2