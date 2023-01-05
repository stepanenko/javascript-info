## `Promise.race()`

The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,
with the value or reason from that promise.

Example:

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 1);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2);
});
Promise.race([p1, p2]).then((value) => {
  console.log(value); // 2
});
Promise.race([p1, p2, 3]).then((value) => {
  console.log(value); // 3
});
```

Q: Implement your own `Promise.race()`

A:

```js
Promise.myRace = (promises) => {
  return new Promise((rs, rj) => {
    promises.forEach((p) => {
      // 1. Wrap p once to prevent it from not being a Promise object
      // 2. Any Promise in promises changes state first, the Promise will follow its result
      Promise.resolve(p).then(rs).catch(rj);
    });
  });
};
```
