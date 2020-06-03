
//// ____ Conditional Map: Changing Items in an Array: ____

const originalArray = [5, 10, 15, 20];

const newArray = originalArray.map(number => {
  // if (number >= 10) {
  //   return number * 2;
  // }
  // return number;
  return number >= 10 ? number * 2 : number;   // [5, 20, 30, 40]
});

// use map to update a single item:
const newArray2 = originalArray.map(number => {   // [5, 11, 15, 20]
  return number === 10 ? number + 1 : number;
});

// If new array needed use map() if mutation is needed - use forEach()
const someArr = [
  { id: 1, data: 5 },
  { id: 2, data: 20 },
  { id: 3, data: 10 }
];

let resArr = someArr.map(obj => {
  return {
    ...obj,
    data: obj.data * 2
  }
});

// let notPure = someArr.map(ob => {
//   ob.data = ob.data * -1;   // will MUTATE the someArr !!!
//   return ob;
// });

let pure = someArr.map(ob => {
  let obCopy = { ...ob };
  obCopy.data = ob.data + 1;   // will NOT mutate the someArr
  return obCopy;
});
// pure => [ { id: 1, data: 6 }, { id: 2, data: 21 }, { id: 3, data: 11 } ]

let pure2 = someArr.map(ob => {
  let obCopy = Object.assign({}, ob);
  obCopy.data = ob.data + 2;   // will NOT mutate the someArr
  return obCopy;
});
console.log(pure2);
// pure2 => [ { id: 1, data: 7 }, { id: 2, data: 22 }, { id: 3, data: 12 } ]

//// ____ map() for 2-dimensional Arrays: ____

const myArray3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const newArray3 = myArray3.map(value => value.map(number => number * 2));
// => [[2, 4, 6], [8, 10, 12], [14, 16, 18]]

// To turn your two-dimensional array into a one-dim. array of transformed values,
// use a flatMap function — which was recently released in ES2019.
// What flatMap does is take a multidimensional array and turns it into single-dimensional array of transformed values.
// If you're not able to use the latest and greatest JavaScript features in ES2019,
// you can recreate your own flatMap function by using reduce.


//// ...... flatMap() to be tried here ......


//// _____ DEBUGGING THE MAP METHOD: _____
// The most common bug that you might encounter is: map is not a function

// originArray could either be [1, 2, 3, 4] or null
let newA = (originalArray || []).map(number => number * 2);
// But it won't work on an object or string or any non-falsy item, so it's not 100% safe.

// Logging values inside of map
newA = originalArray.map(number => console.log(number) || number * 2);
// ...because console.log returns undefined, the map callback falls back to returning the value * 2.



///// https://www.robinwieruch.de/javascript-map-array (DONE 28.04.2020)