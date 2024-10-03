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

Q_1: How can the `city` value be extracted from the `person`?  
A_1: `const { address: { city } } = person;`

---
Q_2: How Destructuring can be used in functions?  
A_2: 
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
