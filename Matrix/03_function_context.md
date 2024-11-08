# Function Context

Function context refers to the value of `this` within a function.  
`this` keyword determines which object a function operates on, and it depends on how the function is called.

### 1. Global Context
If a function is called without an object (like a regular function), `this` refers to the global object (`window` in browsers, `global` in Node.js). In strict mode, `this` will be `undefined` in a standalone function.
```js
function showContext() {
  console.log(this); // window (in a browser)
}
showContext();
```
