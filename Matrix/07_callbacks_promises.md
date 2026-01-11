# Callbacks

A **callback** is just a function you pass to another function to be called later.

**Callbacks** are passed as an arguments to another functions and executed after a certain event or task has completed.  
This mechanism allows for asynchronous programming, enabling the execution of code without blocking the main thread.

### Key Characteristics of Callbacks
- Asynchronous Execution: Callbacks are often used in asynchronous operations, such as fetching data from a server or handling user events, allowing the program to continue running while waiting for a task to complete.
- Function as Argument: A callback is simply a function that you provide to another function, which then calls it at an appropriate time.

## Examples of Callbacks
- Callback used to execute code after a delay:
```javascript
function greet() {
    console.log("Hello after 2 seconds!");
}

setTimeout(greet, 2000); // Calls greet after 2 seconds
```
- Callback in array methods:
```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2); // Callback function doubles each number
console.log(doubled); // Output: [2, 4, 6, 8]
```
- Event Handling
```js
document.getElementById("myButton").addEventListener("click", () => {
    console.log("Button was clicked!");
});
```
- Custom Callback Function
```js
function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}

processUserInput((name) => {
    console.log(`Hello, ${name}!`);
});
```

# Promises

Summary of Promise Methods:

- `Promise.all()` Waits for all promises to resolve or rejects if any fail.
- `Promise.race()` Resolves or rejects as soon as one promise completes.
- `Promise.allSettled()` Waits for all promises to settle (either resolved or rejected) and returns their results.
- `Promise.any()` Resolves when any promise resolves, rejects only if all promises reject.
- `Promise.resolve()` Returns a resolved promise.
- `Promise.reject()` Returns a rejected promise.
- `Promise.prototype.finally()` Runs after a promise is settled (either resolved or rejected), often used for cleanup.

## Examples of Promises
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
