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

## Asynchronous Operations

In JavaScript, these operations are managed by the Browser Web APIs (or Node.js APIs) and are coordinated via the **Event Loop**.

1. Network Requests (AJAX/HTTP)

`fetch()` API: The modern standard for making network requests.
`XMLHttpRequest` (XHR): The older way of making requests (rarely used now but still asynchronous).
**WebSockets**: Real-time, two-way persistent connections.

2. Timers

These operations delay execution or repeat it at specific intervals.

`setTimeout(fn, delay)`: Executes a function once after a specified time.
`setInterval(fn, period)`: Executes a function repeatedly at set intervals.
`requestAnimationFrame(fn)`: Specifically for smooth UI animations, syncing with the browser's refresh rate.

3. Microtasks

These are "high priority" asynchronous tasks that run immediately after the current script finishes, but before the browser renders or moves to the next macrotask.

Promises: `.then()`, `.catch()`, and `.finally()` blocks.
`async` / `awai`t: Syntactic sugar for handling Promises.
`queueMicrotask()`: A way to manually add a function to the microtask queue.

4. Browser Events (DOM)

Interaction with the user is inherently asynchronous because the program doesn't know when a user will click or type.

**Event Listeners**: `addEventListener` (click, submit, keydown, etc.).
**Intersection Observer**: Detecting when an element becomes visible on the screen.
**Resize Observer**: Detecting changes to an element's dimensions.

5. File and Data Storage

Accessing the hard drive or local database takes time and is therefore non-blocking.
**FileReader API**: Reading files uploaded by the user.
**IndexedDB**: A low-level API for client-side storage of significant amounts of structured data.
**Geolocation API**: Waiting for the hardware to provide GPS coordinates.

6. Web Workers

**Web Workers** allow you to run script operations in background threads, separate from the main execution thread of a web application. This is the only way to achieve true "parallelism" in JS.
