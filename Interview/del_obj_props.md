
## Q: Remove some of object's props

The following technique helps us avoid mutable operations and the `delete` keyword,  
giving us an immutable pattern for removing properties from objects in JavaScript.

### A:

```js
const data = { a: 1, b: 2, c: 3 };

const { a, ...rest } = data;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```

## Q2: Dynamically remove a property by key

### A2:

```js
const data = { a: 1, b: 2, c: 3 };

const removeProp = "b"; // it could also change to say "a" or "c" and still work

const { [removeProp]: removed, ...rest } = data;

console.log(removed); // 2
console.log(rest); // { a: 1, c: 3 }
```
