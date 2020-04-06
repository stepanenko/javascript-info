
// In general, there are 3 ways to create a new promise in JavaScript:


// === 1) Using the Promise Constructor ===
function executor(resolve, reject) {
  resolve(42);
  reject(new Error('oops'));
}

const p1 = new Promise(executor);

console.log(p1);                    // Promise { 42 }
p1.then(res => console.log(res));   // 42


// === 2) Using Static Helpers: ===
const p2 = Promise.resolve(33);
p2.then(res => console.log(res));
const p2rejected = Promise.reject(new Error('Thats an Error!'));
p2rejected
  .then(res => console.log(res))
  .catch(err => console.log(err.message));


// === 3) When we call .then() or .catch(), JavaScript creates a new promise: ===
const p3 = Promise.resolve('Hello');
const msg = p3.then(res => res + ' World!');
msg.then(res => console.log(res));

console.log(msg instanceof Promise);   // true
console.log(p3 === msg);   // false

// Promises are "hot" in the sense that it executes the executor function immediately.
// To get a "cold" promise (doesn't execute until you await on it)
// you should use an async function that returns a new promise.
async function getNumber() {
  return 25;
}
const p4 = getNumber();

console.log(p4);   // Promise { 25 }
p4.then(res => console.log(res));   // 25


// === Output order: ===
// Promise { 42 }
// true
// false
// Promise { 25 }
// 42
// 33
// 25
// Thats an Error!
// Hello World!