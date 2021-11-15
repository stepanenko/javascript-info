
# Macrotasks and Microtasks

Microtasks come solely from our code. They are usually created by promises: an execution of `.then/catch/finally` handler becomes a microtask.
Microtasks are used “under the cover” of `await` as well, as it’s another form of promise handling.

There’s also a special function `queueMicrotask(func)` that queues func for execution in the microtask queue.

Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else.

For instance:

```js
setTimeout(() => alert("timeout"));

Promise.resolve()
  .then(() => alert("promise"));

alert("code");
```

1. code shows first, because it’s a regular synchronous call.
2. promise shows second, because .then passes through the microtask queue, and runs after the current code.
3. timeout shows last, because it’s a macrotask.


more at https://javascript.info/event-loop
