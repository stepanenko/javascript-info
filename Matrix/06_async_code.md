# Asynchronous code

## JavaScript is single-threaded

JS executes code in a single thread using the **Event Loop** to handle asynchronous operations.

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

## async / await

Syntax for writing asynchronous code that looks synchronous.

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
