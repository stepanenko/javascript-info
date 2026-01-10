# Asynchronous code

Asynchronous code is executed without blocking the main execution thread.  
It is important for handling operations that can take time, such as network requests, file operations, or any long-running tasks.

## Single-threaded

In JS, asynchronous operations are handled by the **Event Loop**.

## Callbacks

Functions passed as arguments to handle asynchronous operations:
```js
setTimeout(() => {
  console.log("This runs after 1 second");
}, 1000);
```

## Promises

Represent a value that may be available now, in the future, or never.  
States: Pending, Fulfilled, Rejected.
```js
fetch("https://api.example.com")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

## `async` / `await`

A syntactic sugar built on top of promises, allowing developers to write asynchronous code that looks synchronous.

```js
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

## Event Loop

Handles asynchronous operations (e.g., timers, HTTP requests) using the call stack, web APIs, and callback queue.  
Checks if the call stack is empty and then transfer tasks from the message queue to the call stack for execution.

## Common Asynchronous Operations

- API calls (`fetch`, `XMLHttpRequest`)
- File reading/writing (Node.js)
- Timers (`setTimeout`, `setInterval`)
- DOM events (`click`, `keypress`)
