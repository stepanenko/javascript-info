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

### 2. Object Method Context
When a function is called as a method of an object, this refers to the object that called the method:
```js
const user = {
  name: "Jack",
  getName() {
    console.log(this.name); // "Jack"
  }
};
user.getwName();
```

### 3. Constructor Function Context
When a function is used as a constructor (called with `new`), `this` refers to the newly created instance of the object.
```js
function Person(name) {
  this.name = name;
}
const person = new Person("Tom");
console.log(person.name); // "Tom"
```

### 4. Arrow Function Context
Arrow functions don’t have their own `this` context. Instead, they refer to `this` from the surrounding lexical scope.  
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

### 5. Explicit Context Binding
You can manually set the function context with methods like `.call()`, `.apply()`, or `.bind()`.
```js
function showName() {
  console.log(this.name);
}
const user = { name: "Sarah" };
showName.call(user); // "Sarah"
```
