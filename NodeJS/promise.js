
// ES6 Job Queue
// ECMAScript 2015 introduced the concept of the Job Queue,
// which is used by Promises (also introduced in ES6/ES2015).
// It's a way to execute the result of an async function as soon
// as possible, rather than being put at the end of the call stack.

// Promises that resolve before the current function ends will
// be executed right after the current function.

const bar = () => console.log('bar');

const baz = () => console.log('baz');

const foo = () => {
  console.log('foo');
  setTimeout(bar, 0);
  new Promise((resolve, reject) =>
    resolve('should be right after baz, before bar')
  ).then(resolve => console.log(resolve));
  baz();
}

foo();

// That's a big difference between Promises
// (and Async/await, which is built on promises)
// and plain old asynchronous functions through setTimeout() or other platform APIs.
