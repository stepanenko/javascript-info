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
