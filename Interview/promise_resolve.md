## `Promise.resolve()`

Q: Implement `Promise.resolve()`

Example:
```js
// 1. Non-Promise object, non-thenable object
Promise.resolve(1).then(console.log) // 1
// 2. Promise object success status
const p2 = new Promise((resolve) => resolve(2))
Promise.resolve(p2).then(console.log) // 2
// 3. Promise object failure status
const p3 = new Promise((_, reject) => reject('err3'))
Promise.resolve(p3).catch(console.error) // err3
// 4. thenable object
const p4 = {
  then (resolve) {
    setTimeout(() => resolve(4), 1000)
  }
}
Promise.resolve(p4).then(console.log) // 4
// 5. nothing is delivered
Promise.resolve().then(console.log) // undefined
```

A:

```js
Promise.myResolve = function (value) {
  // If value is a Promise, just return it directly
  if (value && typeof value === 'object' && (value instanceof Promise)) {
    return value
  }
  // Otherwise, all other cases are wrapped again by Promise 
  return new Promise((resolve) => {
    resolve(value)
  })
}
```
