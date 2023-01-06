
## `Promise.allSettled()`

The `Promise.allSettled()` method returns a promise that fulfills after all of the given promises have either fulfilled or rejected,
with an array of objects that each describes the outcome of each promise.

It is typically used:

- when you have multiple asynchronous tasks that are **not dependent on one another to complete successfully**
- you'd always like to **know the result of each promise**

In comparison, the `Promise` returned by `Promise.all()` may be more appropriate if:

- the tasks are dependent on each other
- you'd like to immediately reject upon any of them rejecting

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
