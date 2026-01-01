
### 1. The Problem: Method Detachment

When you pass `user.showName` into `setTimeout`, you aren't passing the link to the `user`, you are passing the raw function body:

```js
const user = {
  name: "Jack",
  showName() {
    console.log(this.name);
  }
};

setTimeout(user.showName, 1000); 
// Log after 1 second: undefined
```
What happened? Inside the engine of `setTimeout`, the call looks something like this: `callback()`. Because there is no "dot" (no `user.`), the function is called as a standalone function. In standalone calls, `this` defaults to the **Global Object** (or `undefined` in strict mode).

### How to Fix It (3 Ways)

#### Way 1: Use a Wrapper Function (The Modern Way)

By wrapping the call in an arrow function, the arrow function "remembers" the scope it was created in, and you explicitly call `user.showName()` with the dot.

```js
setTimeout(() => user.showName(), 1000); // "Jack"
```

#### Way 2: The `.bind()` Method

The `bind` method creates a new function that is "hard-wired" to a specific object. No matter how it's called, `this` will always be `user`.
```js
const boundShowName = user.showName.bind(user);
setTimeout(boundShowName, 1000); // "Jack"
```

#### Way 3: Arrow Functions as Properties

Use Class Fields to assign an arrow function as a property. Because the class constructor runs when you create an instance, the arrow function "captures" the correct `this` (the specific instance) and holds onto it forever.

```js
class User {
  constructor(name) {
    this.name = name;
  }

  // Way 3: Arrow function as a class property
  // This is "auto-bound" to the instance
  showName = () => {
    console.log(this.name);
  }
}

const jack = new User("Jack");

// Even when detached and used as a callback, it WORKS!
setTimeout(jack.showName, 1000); 
// Log after 1 second: "Jack"
```
When you use the `methodName = () => {}` syntax inside a class:

- JavaScript actually moves that function inside the constructor.

- Because it's an arrow function defined inside the constructor, its `this` is lexically bound to the new object being created (`jack`).

- Unlike regular methods, this function does not live on the `User.prototype`, it is a unique property sitting directly on every instance of the class.
