
const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const petCounts = pets.reduce((obj, pet) => {
  if (!obj[pet]) obj[pet] = 1;
  else obj[pet]++;
  return obj;
}, {});
console.log(petCounts);   // { dog: 2, chicken: 3, cat: 1, rabbit: 1 }


const myArray = ['a', 'b', 'c', 'd'];
const myObject = myArray.reduce((accumulator, value) => {
  accumulator[value] = true;
}, {});
console.log(myObject); // { a: true, b: true, c: true, d: true }

// If you want to get an array of transformed values, use map.
// But if you need to return something other than an array, you'll likely want to reach for reduce.
// https://www.robinwieruch.de/javascript-map-array
