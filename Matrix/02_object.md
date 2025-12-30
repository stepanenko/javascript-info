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

### Special Properties and Symbols:

- **Symbols**: Used for unique property keys, especially in libraries, to prevent key collisions.
- **Getter and Setter** methods: Allow custom behavior when accessing or setting a property.

### Iterating Over Objects:

- `for...in` - for own and inherited properties
- `Object.keys()`, `Object.values(obj)`, `Object.entries()` - for own properties only

### Built-In Object Methods:

Object Creation and Inspection:

- `Object.create(proto, [propertiesObject])`: Creates a new object with the specified prototype and optional properties.
- `Object.assign(target, ...sources)`: Copies properties from source objects to the target object.
- `Object.keys(obj)`: Returns an array of a given object's own property names (keys).
- `Object.values(obj)`: Returns an array of a given object's own property values.
- `Object.entries(obj)`: Returns an array of a given object's own key-value pairs as `[key, value]`.

Object Comparison

- `Object.is(value1, value2)`: Determines whether two values are the same (handles `NaN` and `-0` cases correctly).

Prototype and Inheritance

- `Object.getPrototypeOf(obj)`: Returns the prototype of the specified object.
- `Object.setPrototypeOf(obj, prototype)`: Sets the prototype (i.e., the internal `[[Prototype]]`) of the specified object.
- `Object.prototype.hasOwnProperty(prop)`: Checks if the object has a property as its own (not inherited).

Property Descriptors and Configuration

- `Object.getOwnPropertyDescriptor(obj, prop):` Returns the property descriptor for a specific property on an object.
- `Object.getOwnPropertyDescriptors(obj)`: Returns all property descriptors of an object.
- `Object.defineProperty(obj, prop, descriptor)`: Adds or modifies a property directly on an object.
- `Object.defineProperties(obj, props)`: Adds or modifies multiple properties on an object.

Object Freezing and Sealing

- `Object.freeze(obj)`: Freezes an object, preventing new properties, modifications, and deletions.
- `Object.isFrozen(obj)`: Checks if an object is frozen.
- `Object.seal(obj)`: Seals an object, preventing new properties and deletions, but allowing modifications of existing properties.
- `Object.isSealed(obj)`: Checks if an object is sealed.
- `Object.preventExtensions(obj)`: Prevents new properties from being added to an object.
- `Object.isExtensible(obj)`: Checks if an object can have new properties added.

Prototype Methods on Object Instances

- `Object.prototype.toString()`: Returns a string representation of the object.
- `Object.prototype.valueOf()`: Returns the primitive value of the specified object.
- `Object.prototype.toLocaleString()`: Returns a localized string representation of the object.
- `Object.prototype.propertyIsEnumerable(prop)`: Checks if a property is enumerable.

## Examples

1. Using **`Object.create()`** to Set Prototype and Define Properties:
```js
// Define the prototype object
const person = {
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

// Create a new object using 'person' as the prototype
const employee = Object.create(person, {
  name: { value: "Alice", writable: true, enumerable: true },
  position: { value: "Developer", writable: false, enumerable: true },
  salary: { value: 1200, writable: true, enumerable: false }
});

console.log(employee.greet()); // Output: "Hello, my name is Alice"
console.log(employee.position); // Output: "Developer"

// Checking prototype inheritance
console.log(Object.getPrototypeOf(employee) === person); // true

// writable - false
employee.position = "Manager";
console.log(employee.position); // Output: "Developer" (unchanged)

// enumerable - false
Object.keys(employee); // Output: ['name', 'position']
Object.values(employee); // Output: ['Alice', 'Developer']
for (let key in employee) {
  console.log(key); // Outputs "name" and "position"
}
```
---

2. Using **`Object.assign(target, ...sources)`** to copy properties from one or more source objects to a target object:
```js
const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { c: 6, d: 7 };

Object.assign(target, source1, source2);

console.log(target); // Output: { a: 1, b: 4, c: 6, d: 7 }
```
Limitations:  
- Only Copies Enumerable Own Properties: Properties that are non-enumerable or inherited from the prototype chain are not copied.
- Not a Deep Clone: `Object.assign` does not recursively copy nested objects.
For deep cloning, consider other methods, such as structured cloning (`structuredClone`), `JSON` serialization, or using libraries like Lodash.

---
3. Difference between `Object.assign(target, ...sources)` and spread operator (`...`)

While they often produce the same result for simple tasks, they differ in how they handle setters, prototypes, and mutability.

- **Mutability** (The Biggest Practical Difference):

```js
const target = { a: 1 };
const source = { b: 2 };

// Mutates 'target'
Object.assign(target, source); 
console.log(target); // { a: 1, b: 2 }

// Does NOT mutate 'original'
const original = { a: 1 };
const copy = { ...original, b: 2 };
console.log(original); // { a: 1 }
```

- **Setters vs. Definition**

If the target object has a setter for a property, `Object.assign()` will trigger that setter function.  
Spread simply defines a new property on the new object, ignoring any setters that might have existed on a prototype.  

- **Handling of Read-only Properties**

If the target object has a read-only property (defined via `Object.defineProperty` or `Object.create` with `writable: false`):  
`Object.assign()` will throw a `TypeError` because it is trying to assign a value to a non-writable property.  
Spread will succeed because it is creating a brand-new object where that property hasn't been defined as read-only yet.

---
4. Using **`Object.is()`**. While it behaves almost exactly like the strict equality operator (`===`), it was introduced in ES6 to fix two specific "quirks" in JavaScript’s math logic.

`NaN === NaN` is `false`, whereas `Object.is()` correctly identifies them as the same.

`+0 === -0` is `true`, whereas `Object.is()` treats them as different values.
```js
const zero = -0;

console.log(zero === 0);           // true (Standard equality hides the sign)
console.log(Object.is(zero, -0));  // true (The reliable check)
console.log(Object.is(zero, 0));   // false

// The "Infinity Trick"
function isNegativeZero(n) {
  return n === 0 && (1 / n === -Infinity);
}

-5 * 0 // results in -0
0 / -5 // results in -0
```
```js
const a = { item: "apple" };
const b = { item: "apple" };
const c = a;

Object.is(a, b); // false (different references)
Object.is(a, c); // true  (same reference)
```
**For 99% of your code, stick with `===`. It is the industry standard and slightly faster.**

`NaN` is the only value in JS that does not equal itself
