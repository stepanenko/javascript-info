# Destruction, Spread and Rest

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
Destructuring can be used in functions:   
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
```

# Rest

Remove some of object's props.  
The following technique helps us avoid mutable operations and the `delete` keyword,
giving us an immutable pattern for removing properties from objects in JavaScript.
```js
const data = { a: 1, b: 2, c: 3 };

const { a, ...rest } = data;

console.log(a); // 1
console.log(rest); // { b: 2, c: 3 }
```
