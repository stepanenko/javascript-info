# Callbacks

to be added...

# Promises

Summary of Promise Methods:

- `Promise.all()` Waits for all promises to resolve or rejects if any fail.
- `Promise.race()` Resolves or rejects as soon as one promise completes.
- `Promise.allSettled()` Waits for all promises to settle (either resolved or rejected) and returns their results.
- `Promise.any()` Resolves when any promise resolves, rejects only if all promises reject.
- `Promise.resolve()` Returns a resolved promise.
- `Promise.reject()` Returns a rejected promise.
- `Promise.prototype.finally()` Runs after a promise is settled (either resolved or rejected), often used for cleanup.

## Examples
Promise that resolves in 1 second  
```js
const myResolvedPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('This promise has been resolved after 1 second!');
  }, 1000);
});
```

Promise that rejects in 2 seconds  
```js
const myRejectedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('This promise has been rejected after 2 seconds!'));
  }, 2000);
});
```

Handle both the resolved and rejected promises we created previously  
```js
// Using Promise.all to handle both promises
Promise.all([resolvedPromise, rejectedPromise])
  .then(results => {
    console.log('All promises resolved:', results); // This won't be called
  })
  .catch(error => {
    console.error('At least one promise was rejected:', error.message);
  });
```
