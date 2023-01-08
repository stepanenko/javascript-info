
## `Promise.allSettled()`

The `Promise.allSettled()` method returns a promise that fulfills after all of the given promises have either fulfilled or rejected,
with an array of objects that each describes the outcome of each promise.

It is typically used:

- when you have multiple asynchronous tasks that are **not dependent on one another to complete successfully**
- you'd always like to **know the result of each promise**

In comparison, the `Promise` returned by `Promise.all()` may be more appropriate if:

- the tasks are dependent on each other
- you'd like to immediately reject upon any of them rejecting

Q: Implement your own `Promise.allSettled()`

Example:

```js
const p1 = Promise.resolve(1);
const p2 = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000);
});
const p3 = new Promise((resolve) => {
  setTimeout(() => resolve(3), 3000);
});
const p4 = Promise.reject('err4');
const p5 = Promise.reject('err5');
// 1. All Promises Succeed
const p11 = Promise.allSettled([ p1, p2, p3 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)));
 
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "fulfilled",
    "value": 3
  }
]
*/
      
// 2. There is a Promise that fails
const p12 = Promise.allSettled([ p1, p2, p4 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)));
        
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "fulfilled",
    "value": 2
  },
  {
    "status": "rejected",
    "reason": "err4"
  }
]
*/
      
// 3. There are two Promises that fail
const p13 = Promise.allSettled([ p1, p4, p5 ])
	.then((res) => console.log(JSON.stringify(res, null,  2)));
        
/*
[
  {
    "status": "fulfilled",
    "value": 1
  },
  {
    "status": "rejected",
    "reason": "err4"
  },
  {
    "status": "rejected",
    "reason": "err5"
  }
]
*/
```

A:

- whether the `Promise` is fully successful or partially failed, it will eventually enter the `.then` callback of `Promise.allSettled`
- in the final return value, both the successful and failed items have the status attribute, the value is fulfilled when successful, and rejected when it fails
- in the final return value, success contains the value attribute, while failure is the reason attribute

```js
Promise.myAllSettled = (promises) => {
  return new Promise((rs, rj) => {
    let count = 0;
    let result = [];
    const len = promises.length;
    // If the array is empty, return empty data directly
    if (len === 0) {
      return rs([]);
    }
    promises.forEach((p, i) => {
      Promise.resolve(p).then((res) => {
        count += 1;
        // set success attribute 
        result[ i ] = {
          status: 'fulfilled',
          value: res
        };
        
        if (count === len) {
          rs(result);
        }
      }).catch((err) => {
        count += 1;
        // set failure property 
        result[i] = { 
          status: 'rejected', 
          reason: err 
        };
        if (count === len) {
          rs(result);
        }
      });
    });
  });
};
```
