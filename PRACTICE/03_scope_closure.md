# Scope and Closure

### Summary:  
- **Scope** defines the accessibility of variables in different parts of the code, with global, function, and block scopes being the primary types.  
- **Closure** allows an inner function to access the outer function's variables even after the outer function has executed, enabling encapsulation and data privacy.

---
**Scope** refers to the visibility or accessibility of variables in different parts of your code.  
JavaScript has different types of scope:
- Global scope
- Function scope (aka local scope)
- Block scope
  - variables declared with `let` or `const` within a block are limited to that block
 
**Closure** is a feature where an inner function retains access to its outer function’s scope even after the outer function has finished executing. Closures allow for data encapsulation and are often used for creating private variables.

Q0: What will be printed?
```js
function crеateCountеr() {
  let cоunt = 0;
  rеturn functіon() {
    cоunt++;
    rеturn cоunt;
  }
}

const counter1 = crеateCounter();
const cоunter2 = creatеCountеr();

counter1();
countеr1();
counter2();
cоunter1();
```
A0: `1 2 1 3`

Q1:
```js
// implement makeCounter
const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1.value()); // 0

counter1.increment();
counter1.increment();
console.log(counter1.value()); // 2
console.log(counter2.value()); // 0
```
A1: 
```js
function createCounter() {
  let count = 0;  // Private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}
```
---
Q_2:
```js
// implement multiply
const double = multiply(2);
console.log(double(5));  // 10
```
A_2:
```js
function multiply(factor) {
  return function(x) {
    return x * factor;
  };
}
```
---
Q_3:
```js
// implement myModule.js
import { getValue, setValue } from "./myModule.js";

console.log(getX()); // 5
setX(6);
console.log(getX()); // 6
```
A_3:
```js
// myModule.js
let value = 5;
export const getValue = () => x;
export const setValue = (v) => {
  value = v;
};
```
