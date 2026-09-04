## `Object.create(proto, [propertiesObject])`

Creates a new object with the specified prototype and, optionally, own properties defined via a descriptor object.

- ### Basic usage — just a prototype
```javascript
const animal = {
  speak() {
    return `${this.name} makes a sound.`;
  }
};

const dog = Object.create(animal);
dog.name = "Rex";

console.log(dog.speak()); // "Rex makes a sound."
console.log(Object.getPrototypeOf(dog) === animal); // true
```

- ### With `null` prototype (no inherited properties, not even `toString`)
```javascript
const bareObject = Object.create(null);
console.log(bareObject.toString); // undefined
console.log(Object.getPrototypeOf(bareObject)); // null

// Useful as a "pure" dictionary/map with no prototype-chain surprises
bareObject.foo = "bar";
console.log(bareObject.foo); // "bar"
```

- ### With a `propertiesObject` (second argument)

The second argument uses the same descriptor format as `Object.defineProperties`.
```javascript
const person = Object.create(Object.prototype, {
  name: {
    value: "Alice",
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 30,
    writable: false,   // read-only
    enumerable: true,
    configurable: false
  }
});

console.log(person.name); // "Alice"
person.age = 99;          // silently fails (or throws in strict mode)
console.log(person.age);  // 30
```

- ### Using getters/setters in the descriptor
```javascript
const temperature = Object.create(Object.prototype, {
  celsius: {
    value: 0,
    writable: true,
    enumerable: true
  },
  fahrenheit: {
    get() {
      return this.celsius * 9 / 5 + 32;
    },
    set(f) {
      this.celsius = (f - 32) * 5 / 9;
    },
    enumerable: true
  }
});

temperature.celsius = 25;
console.log(temperature.fahrenheit); // 77

temperature.fahrenheit = 32;
console.log(temperature.celsius); // 0
```

- ### Classical inheritance pattern (pre-ES6 class style)
```javascript
function Shape(name) {
  this.name = name;
}
Shape.prototype.describe = function () {
  return `I am a ${this.name}`;
};

function Circle(radius) {
  Shape.call(this, "circle");
  this.radius = radius;
}

// Set up inheritance
Circle.prototype = Object.create(Shape.prototype, {
  constructor: {
    value: Circle,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

Circle.prototype.area = function () {
  return Math.PI * this.radius ** 2;
};

const c = new Circle(5);
console.log(c.describe());      // "I am a circle"
console.log(c.area().toFixed(2)); // "78.54"
console.log(c instanceof Shape);  // true
```

- ### True shallow clone
```javascript
const original = { a: 1, b: 2 };
const clone = Object.create(
  Object.getPrototypeOf(original),
  Object.getOwnPropertyDescriptors(original)
);

console.log(clone); // { a: 1, b: 2 }
console.log(clone !== original); // true, it's a new object
```
The goal here is a true shallow clone — not just copying values, but copying the exact same prototype and the exact same property characteristics (writable, enumerable, configurable, getters/setters and all).

Why not just `{ ...original }` or `Object.assign({}, original)`?

Those approaches only copy enumerable own properties as plain values. They lose:
- Any custom prototype (`{ ...obj }` always gives you a plain `Object.prototype` clone)
- Non-enumerable properties
- Getter/setter functions (they copy the current computed value of a getter, not the getter itself)
- `writable`/`configurable` flags

So if `original` had a read-only property or a getter, a spread/`Object.assign` clone would silently turn it into an ordinary writable value. That's a loss of fidelity.

Breaking down the two arguments

1. `Object.getPrototypeOf(original)`

```javascript
Object.getPrototypeOf(original) // → Object.prototype (since original is a plain object literal)
```

This grabs whatever `original` inherits from. Passing it as the first argument to `Object.create` means the clone will have the exact same prototype chain as `original` — not just "a" prototype, but the real one, whatever it happens to be (could be `Object.prototype`, `Array.prototype`, a custom class prototype, or even null).

2. `Object.getOwnPropertyDescriptors(original)`

```javascript
Object.getOwnPropertyDescriptors(original)
// → {
//     a: { value: 1, writable: true, enumerable: true, configurable: true },
//     b: { value: 2, writable: true, enumerable: true, configurable: true }
//   }
```

This returns a descriptor object for every own property (enumerable or not), fully describing how each one behaves — including `get`/`set` pairs if they exist, instead of resolving them to a value.

#### Putting it together

`Object.create(proto, descriptors)` then builds a brand-new object using that prototype and defines each property using its original descriptor — so:
```javascript
console.log(clone);              // { a: 1, b: 2 }
console.log(clone !== original); // true — it's a distinct object
```

...but critically, if `original` had looked like this instead:
```javascript
const original2 = Object.create(SomeProto, {
  id: { value: 42, writable: false, enumerable: false },
  get computed() { return this.id * 2; }
});
```

Then cloning it the "naive" way (`{ ...original2 }`) would drop the non-enumerable id entirely and flatten `computed` into a plain number. The `Object.create` + `getOwnPropertyDescriptors` approach preserves all of that faithfully — same prototype, same hidden properties, same getters — just on a new, independent object.

#### One caveat

It's still a shallow clone: if a property's value is an object/array, both original and clone share a reference to that same nested object. Nested structures aren't deep-copied.

### Quick note
- Descriptor properties (`value`, `writable`, `enumerable`, `configurable`, or `get`/`set`) default to `false`/`undefined` if not specified, **not** to the values you might expect from plain assignment — so always be explicit if you want a normal, writable/enumerable property.
