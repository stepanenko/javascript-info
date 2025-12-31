
1. The Problem: Method Detachment
When you pass `user.showName` into `setTimeout`, you aren't passing the link to the `user`, you are passing the raw function body:

```js
const user = {
  name: "Jack",
  showName() {
    console.log(this.name);
  }
};

// This fails! 
setTimeout(user.showName, 1000); 
// Log after 1 second: undefined
```
What happened? Inside the engine of `setTimeout`, the call looks something like this: `callback()`. Because there is no "dot" (no `user.`), the function is called as a standalone function. In standalone calls, this defaults to the **Global Object** (or `undefined` in strict mode).
