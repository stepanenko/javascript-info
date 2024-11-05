# Object

### Creating Objects:

- Object Literals:
```js
const person = { name: "Alice", age: 30 };
```
- Constructor Function:
```js
const person = new Object();
person.name = "Alice";
```
- Classes (ES6): Using class syntax
```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

### Prototype and Inheritance:

The `__proto__` or `Object.getPrototypeOf()` gives access to an object’s prototype, enabling shared properties and methods.

### Built-In Object Methods:

- `Object.keys()`: Returns an array of the object’s own property names.
- `Object.values()`: Returns an array of the object’s own values.
- `Object.entries()`: Returns an array of [key, value] pairs.
- `Object.assign()`: Copies properties from one or more source objects to a target object.
- `Object.freeze()` and `Object.seal()`: Restrict modifications to an object.

### Special Properties and Symbols:

- **Symbols**: Used for unique property keys, especially in libraries, to prevent key collisions.
- **Getter and Setter** methods: Allow custom behavior when accessing or setting a property.

### Iterating Over Objects:

- `for...in` - for own and inherited properties)
- `Object.keys()`, `Object.entries()` - for own properties only
