# Destructuring and Spread operator

**Destructuring** in JS is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.  
It simplifies the process of extracting data from these structures and assigning them to variables in a more concise way.

```js
const numbers = [1, 2, 3, 4];
const [first, , third] = numbers;

const person = {
  name: 'John',
  address: {
    city: 'New York',
    zip: 10001
  }
};

const { name, address: { city, zip } } = person;

```

Q1: How can the `city` value be extracted from the `person`?  
A1: `const { address: { city } } = person;`

---
Q2: How Destructuring can be used in functions?  
A2: 
```js
const userInfo = ({ name, age }) => {
  console.log(`Name: ${name}, Age: ${age}`);
};
```

# Spread

The spread operator (`...`) in JS is used to expand or "spread" elements of an array, object, or iterable into individual elements or properties. It allows for easier manipulation of arrays and objects, including merging, cloning, or passing elements.

Examples:
```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
```

# Rest

Q3: Remove some of object's props  
A3:  
The following technique helps us avoid mutable operations and the `delete` keyword,
giving us an immutable pattern for removing properties from objects in JavaScript.
```js
const data = { a: 1, b: 2, c: 3 };

const { a, ...rest } = data;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```
