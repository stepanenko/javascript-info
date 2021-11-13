
let promise = Promise.resolve();

promise.then(() => console.log("promise done!"));

console.log("code finished"); // this shows first

// ECMA standard specifies an internal queue PromiseJobs, more often referred to as the “microtask queue” (V8 term)

// As stated in the specification:
// - The queue is first-in-first-out: tasks enqueued first are run first.
// - Execution of a task is initiated only when nothing else is running.
// Meaning, when a promise is ready, its .then/catch/finally handlers are put into the queue; they are not executed yet.
// When the JavaScript engine becomes free from the current code, it takes a task from the queue and executes it.

// What if the order matters for us? How can we make code finished appear after promise done?

// Easy, just put it into the queue with .then:
Promise.resolve()
  .then(() => console.log("promise done!"))
  .then(() => console.log("code finished"));
