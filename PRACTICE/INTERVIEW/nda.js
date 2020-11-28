
function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  var arity = fn.lenghth;

  // TODO
  // not runnable, pseudo-like code
  return function next(...args) {
    if (args.length === arity) {
      return fn(...args);
    } else {
      return function (...args2) {
        return next(...[args, ...args2]);
      }
    }
  }
}

const sum2 = curry(sum);

// Test Driven Dev
sum2(1)(2)(3) // 6
