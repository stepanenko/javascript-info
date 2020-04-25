
const originalArray = [1, 2, 3, 4, 5];
const newArray = originalArray.slice();

const copy = [...originalArray];

console.log(newArray === originalArray);   // false
console.log(copy === originalArray);   // false
