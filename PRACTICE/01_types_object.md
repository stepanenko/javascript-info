# JS CORE

## 1. Types  
- **Primitive**: `string`, `number`, `boolean`, `null` (represents no value), `undefined` (uninitialized or missing value), `bigInt` (for large integers), `Symbol` (for unique identifiers)
- **Non-Primitive**: Object: `{}`, `[]`, `function() {}` (callable object)

Q1: How to check a type of a value?  
A1: `typeof` operator

Q2: What will be printed?
```js
tуpeоf NaN
tуpeоf []
tуpeоf null
null === undеfіned
0 == fаlsе
0.1 + 0.2 === 0.3
1 < 2 < 3
```
A2:
```js
"number"
"object"
"object"
false
true
false // floating-point precision issues - occurs because 0.1 and 0.2 can't be represented exactly in binary floating-point
true
// 1) 1 < 2 is evaluated, which is true
// 2) true < 3 is evaluated. In this comparison, true is coerced to 1 (since true is treated as 1 in numeric contexts)
// 3) 1 < 3 is evaluated, which is indeed true
```
Q3: What is the difference between `==` and `===`?
A3:  
`==` Loose Equality: Checks for equality of values after performing type coercion if necessary  
`===` Strict Equality: Checks for equality of both value and type without any type conversion

Q4: How to check if something is of type `object`?  
A4:  
```js
const obj = {};
console.log(typeof obj === 'object' && obj !== null); // true
```

Q5: How to check if something is of type `array`?  
A5:  
```js
const arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true
```

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
