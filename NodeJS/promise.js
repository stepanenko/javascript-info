
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
    resolve('should be after baz, before todos and bar')
  ).then(resolve => console.log(resolve));
  baz();
}

foo();

// That's a big difference between Promises (and Async/await, which is built on promises)
// and plain old asynchronous functions through setTimeout() or other platform APIs.

let todos = require('./todos.json');

let done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = todos.filter(todo => todo.completed);
    resolve(workDone);
  } else {
    const why = 'Still working on something else...';
    reject(why);
  }
});

const checkIfItsDone = () => {
  isItDoneYet
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}

checkIfItsDone();

// ____ Promisifying ____
// A way to use a classic JavaScript function that takes a callback, and have it return a promise:
const fs = require('fs');

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return;        // and we don't want to go any further
      }
      resolve(data);
    });
  });
}

getFile('/etc/passwd')
  .then(data => console.log(data))
  .catch(err => console.error(err));
