
### 1. The Problem: Method Detachment

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

### How to Fix It (3 Ways)

Way 1: Use a Wrapper Function (The Modern Way)

By wrapping the call in an arrow function, the arrow function "remembers" the scope it was created in, and you explicitly call `user.showName()` with the dot.

```js
setTimeout(() => user.showName(), 1000); // "Jack"
```

Way 2: The `.bind()` Method

The `bind` method creates a new function that is "hard-wired" to a specific object. No matter how it's called, `this` will always be `user`.
```js
const boundShowName = user.showName.bind(user);
setTimeout(boundShowName, 1000); // "Jack"
```

Way 3: Arrow Functions as Properties

If you define the method as an arrow function inside the object, it will solve the callback problem, but only if the object itself is defined in a scope where this is what you want (like inside a Class constructor).

```js
...
```
