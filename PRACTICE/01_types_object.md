# JS CORE

## 1. Types  
- **Primitive**: `string`, `number`, `boolean`, `null` (represents no value), `undefined` (uninitialized or missing value), `bigInt` (for large integers), `Symbol` (for unique identifiers)
- **Non-Primitive**: Object: `{}`, `[]`, `function() {}` (callable object) - (includes arrays, functions, and other objects)

## 2. Objects  
- Non-Static (Instance-based): `Object`, `Array`, `Function`, `Date`, `RegExp`, `Error`, `Set`, `Map`, `WeakSet`, `WeakMap`, `Promise`, `Int8Array`, `Uint8Array`, `ArrayBuffer`, `DataView`, `Proxy`
  - Require instantiation using constructors or literals to create individual instances.
  - Each instance has its own properties and methods (e.g., arrays, functions, and dates).

  - Examples: `new Date()` creates a new date object, `[]` creates a new array.
   
```js
const arr = new Array(1, 2, 3);  // Array instance
const set = new Set([1, 2, 3]);  // Set instance
```

- Static: `Math`, `JSON`, `Reflect`, `Atomics`, `Intl`, `Symbol`, `BigInt`
  - Do not require instantiation and provide methods or properties directly on the object itself.
  - They are global utilities or namespaces, often used for utility functions and constants.
  - Examples:
    - Math provides mathematical constants and functions directly.
    - JSON provides methods for parsing and stringifying JSON data.
```js
Math.max(1, 2, 3);         // No need to instantiate Math
JSON.parse('{"a": 1}');    // No need to instantiate JSON
```
Summary:
- Non-static objects need to be created with constructors and produce new instances.
- Static objects provide utility methods directly and are globally accessible without instantiation.
