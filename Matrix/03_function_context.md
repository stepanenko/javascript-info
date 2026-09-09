# Function Context

Function context refers to the value of `this` within a function.  
`this` keyword determines which object a function operates on, and it depends on how the function is called.

## 1. Global Context

If a function is called without an object (like a regular function), `this` refers to the global object (`window` in browsers, `global` in Node.js). In strict mode, `this` will be `undefined` in a standalone function.
```js
function showContext() {
  console.log(this);
}
showContext(); // window / global / undefined
```

## 2. Object Method Context

When a function is called as a method of an object, `this` refers to the object that called the method:
```js
const user = {
  name: "Jack",
  getName() {
    console.log(this.name);
  }
};
user.getwName(); // "Jack"
```

## 3. Constructor Function Context

When a function is used as a constructor (called with `new`), `this` refers to the newly created instance of the object.
```js
function Person(name) {
  this.name = name;
}
const person = new Person("Tom");
console.log(person.name); // "Tom"
```

## 4. Arrow Function Context

Arrow functions don't have their own `this` context. Instead, they refer to `this` from the surrounding lexical scope.  
This is useful for ensuring that `this` remains the same inside nested functions.
```js
const user = {
  name: "Jack",
  showName: () => {
    console.log(this.name);
  }
};
user.showName(); // undefined
```
Above `this` refers to the global object (which is `window` in a browser or `{} / global` in Node.js).

Unlike regular functions, arrow functions "inherit" `this` from the scope where they were defined, not where they are called.

- you defined `showName` inside an object literal, but a set of curly braces `{}` used to create an object does not create a new `this` context, **only functions and classes** do that.

- because the object doesn't have a scope, the arrow function looks one level higher to the Global/Module scope.

- at the global level, `this` points to the global object; since there is likely no global variable named `name`, it returns `undefined`.

So, **arrow functions** — no own binding, inherits `this` from enclosing (outer) scope, and can't be changed by `call`/`apply`/`bind`/`new`.

**Rule of thumb**: use regular functions (or method shorthand) for object methods that need this; use arrow functions when you want to preserve the outer this (e.g., inside callbacks).

## 5. Explicit Context Binding

You can manually set the function context with methods like `.call()`, `.apply()`, or `.bind()`.
```js
function showName() {
  console.log(this.name);
}
const user = { name: "Sarah" };
showName.call(user); // "Sarah"
```

## 6. Losing `this` when passing methods around

Very common bugs:
```js
const user = {
  name: "Jack",
  showName() { console.log(this.name); }
};

// bug 1
const fn = user.showName;
fn(); // undefined — lost the "user" context

// bug 2
setTimeout(user.showName, 100); // also undefined, same problem
```

### Bug 1: `fn(); // undefined`

When you write `const fn = user.showName`, you're just copying a reference to the function into `fn`. The function itself has no memory of "I came from `user`." It's just a standalone function now.

So when you call `fn()`, the call site is just `fn()` — no object before the dot. That means default binding kicks in:

  - Strict mode (or modules, or classes): `this` is `undefined`
  - Sloppy mode: `this` is the global object (`window` in browsers)

### Bug 2: `setTimeout(user.showName, 100); // also undefined`

This looks different but is exactly the same bug in disguise. `user.showName` here evaluates to a plain function reference — you're passing the function itself as an argument to `setTimeout`, the same way you did with `const fn = user.showName`.

Internally, `setTimeout` will later call that function on its own, roughly like:
```js
callback(); // not user.callback()
```
There's no `user.` in front of the call, so again, default binding applies, and `this` isn't `user`.

The `.` at the call site is what matters — `setTimeout` doesn't know or care that the function came from `user`; it just has a bare reference to a function and calls it plainly.

#### The common mental model

Think of it like passing around a phone number vs. a person who owns it. `user.showName` gives you the "number" (the function), not a tag saying "this belongs to user." Once detached, nothing links it back.

Fixes:
```js
// 1. Arrow wrapper — captures `user` via closure, calls it properly with dot access
setTimeout(() => user.showName(), 100);

// 2. Explicit bind — permanently locks `this` to user
setTimeout(user.showName.bind(user), 100);
const fn = user.showName.bind(user);
fn(); // "Jack"

// 3. Arrow function as a class field (auto-bound per instance)
class User {
  name = "Jack";

  // Arrow function class field — NOT a prototype method
  showName = () => {
    console.log(this.name);
  };
}

const user = new User();

const fn = user.showName;
fn(); // "Jack" ✅ — works even when detached!

setTimeout(user.showName, 100); // "Jack" ✅ — works too!
```
**Why this works**

Class fields are initialized per instance, inside the constructor, at the time `new User()` runs. When the arrow function is created, it's created inside the constructor call — and at that moment, `this` refers to the newly constructed instance.

Since arrow functions capture `this` lexically (from their enclosing scope at creation time), the arrow permanently "locks in" that instance's `this` via closure — regardless of how `showName` is later called or passed around.

It's roughly equivalent to doing this manually in the constructor:
```js
class User {
  constructor() {
    this.name = "Jack";
    this.showName = () => {
      console.log(this.name); // closes over the constructor's `this`
    };
  }
}
```
### Trade-offs vs. regular methods

**Regular method (prototype):**
```js
class User {
  name = "Jack";
  showName() { console.log(this.name); } // on User.prototype
}
```
- Shared across all instances (memory efficient)
- Must be manually bound if detached (.bind(this) in constructor, or bind at call site)

**Arrow field (instance property):**
```js
class User {
  name = "Jack";
  showName = () => console.log(this.name); // own property per instance
}
```
- A new function is created for every instance (slightly more memory if you have thousands of instances)
- Auto-bound — safe to pass as a callback anywhere (`onClick={user.showName}`, `setTimeout(user.showName)`, etc.)
- Not on the prototype, so `Object.getPrototypeOf(user).showName` is `undefined` — it won't show up in prototype-based introspection, and subclasses can't easily override it with `super.showName()`

**Rule of thumb:** 
- use arrow class fields for methods you know will be passed around as callbacks (event handlers, `setTimeout`, promise callbacks);
- use regular prototype methods for internal methods called via `this.method()` where you control the call site.
