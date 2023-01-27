
Q: Implement function to compare if two arrays are equal

```js
let array1 = [11, 22, 33];
let array2 = [11, 22, 33];

console.log(array1 == array2); // false
console.log(array1 === array2); // false
```

Possible answers:
```js
// 1
const compareArrays = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

// 2 
const compareArrays = (a, b) => {
  return a.toString() === b.toString();
};

// 3
let array1 = [11, null, 33];
let array2 = [11, undefined, 33];

console.log(JSON.stringify(array1) === JSON.stringify(array2)); //true
console.log(array1.toString() === array2.toString()); //true

// 4
const compareArrays = (a, b) =>
  a.length === b.length &&
  a.every((element, index) => element === b[index]);
  
// 5
const compareArrays = (a, b) => {
  if (a.length !== b.length) return false;
  else {
    // Comparing each element of your array
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

```
