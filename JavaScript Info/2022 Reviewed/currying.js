
// Currying is a transformation of functions that translates a function from
// callable as f(a, b, c) into callable as f(a)(b)(c).

// Currying doesn’t call a function. It just transforms it: f(a, b, c) -> f(a)(b)(c)

function curry1(f) { // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry1(sum);

console.log(curriedSum(1)(2)); // 3, called partially


// More advanced implementations of currying, such as _.curry from lodash library,
// return a wrapper that allows a function to be called both normally and partially:
const _ = require('lodash');

curriedSum = _.curry(sum);

console.log(curriedSum(1, 2)); // 3, still callable normally, requires Lodash


// For instance, we have the logging function log(date, imp, msg) that formats and outputs
// the information. In real projects such functions have many useful features like sending
// logs over the network, here we’ll just use alert:

function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

// Let’s curry it!

log = _.curry(log); // requires Lodash

// After that log works normally:

log(new Date(), "DEBUG", "some debug 1"); // log(a, b, c)

// But also works in the curried form:

log(new Date())("DEBUG")("some debug 2"); // log(a)(b)(c)

// Now we can easily make a convenience function for current logs:

// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());

// use it
logNow("INFO", "message"); // [HH:mm] INFO message

// Now logNow is log with fixed first argument,
// in other words “partially applied function” or “partial” for short.

// We can go further and make a convenience function for current debug logs:

let debugNow = logNow("DEBUG");

debugNow("message"); // [HH:mm] DEBUG message

// So, the benefits are:
// We didn’t lose anything after currying: log is still callable normally.
// We can easily generate partial functions such as for today’s logs.
