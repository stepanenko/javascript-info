
## `Promise.all()`

Q: Implement your own `Promise.all()`

Built-in `Promise.all()` example:
```js
const p1 = Promise.resolve(1)
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000)
})
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 3000)
})
const p4 = Promise.reject('err4')
const p5 = Promise.reject('err5')
// 1. All Promises Succeed
const p11 = Promise.all([ p1, p2, p3 ])
  .then(console.log) // [ 1, 2, 3 ]
      .catch(console.log)
      
// 2. There is a Promise that fails
const p12 = Promise.all([ p1, p2, p4 ])
  .then(console.log)
      .catch(console.log) // err4
      
// 3. There are two Promise failures, you can see the final output is err4, the first failed return value
const p13 = Promise.all([ p1, p4, p5 ])
  .then(console.log)
      .catch(console.log) // err4
```

A:

```js
Promise.myAll = (promises) => {
  return new Promise((rs, rj) => {
    // counter
    let count = 0
    // to store the results
    let result = []
    const len = promises.length
    
    if (len === 0) {
      return rs([])
    }
    
    promises.forEach((p, i) => {
      // Note: Some array items may not be Promise and need to be converted to Promise manually.
      Promise.resolve(p).then((res) => {
        count += 1
        // Collect the return value of each Promise 
        result[ i ] = res
        // When all Promises are successful, set the returned Promise result to result
        if (count === len) {
          rs(result)
        }
        // As long as one Promise fails, the result fails
      }).catch(rj)
    })
  })
}
```
You can see that `Promise.myAll` does the same thing as `Promise.all`.

Continue at https://javascript.plainenglish.io/i-lost-a-job-opportunity-just-because-of-promise-all-be396f6efe87

