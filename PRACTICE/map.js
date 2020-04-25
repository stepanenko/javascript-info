
// Conditional Map: Changing Items in an Array:

const originalArray = [5, 10, 15, 20];

const newArray = originalArray.map(number => {
  // if (number >= 10) {
  //   return number * 2;
  // }
  // return number;
  return number >= 10 ? number * 2 : number;   // [5, 20, 30, 40]
});

// use map to update a single item:
const newArray2 = originalArray.map(number => {
  return number === 10 ? number + 1 : number;
});

console.log(newArray2); // [5, 11, 15, 20]


// Map Method for 2-dimensional Arrays:   https://www.robinwieruch.de/javascript-map-array



