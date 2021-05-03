
const originalArray = [1, 2, 3, 4, 5];

// slice way
const newArray = originalArray.slice();
console.log(newArray === originalArray);   // false

// spread way
const copy = [...originalArray];
console.log(copy === originalArray);   // false
