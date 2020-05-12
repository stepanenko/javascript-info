
let range = {
  1: "581", 2: "1852", 3: "442", 4: "1072", 5: "627", 6: "974",
  7: "907", 8: "1044", 9: "439", 10: "324", 11: "635", 12: "88", 13: "65",
  14: "1654", 15: "857", 16: "930", 17: "539", 18: "643", 19: "359",
  20: "444", 21: "556", 22: "469", 23: "245", 24: "154", 25: "571", 26: "269"
};
// range = null;   // for testing !
const lowSize = 500;


// Improve this code with reduce, forEach or map:
// console.time('for in loop');
// let inSizeRange = [];
// for (let key in range) {
//   if (range.hasOwnProperty(key)) {
//     parseInt(range[key]) > lowSize
//       ? inSizeRange.push(parseInt(key))
//       : inSizeRange;
//   }
// }
// console.timeEnd('for in loop');   // 0.3 ms
// console.log('Result with For In Loop:', inSizeRange);


// ____ Reduce ____
console.time('reduce with concat');
// cancat() behaves strage here but will work
let res = Object.keys(range || {}).reduce((arr, key) => range[key] > lowSize ? arr.concat(Number(key)) : arr, []);

// ... added {} in case range is null or undefined
// if initial [] is missing the result will be wrong !!!
console.timeEnd('reduce with concat');   // 0.25 ms


console.time('reduce with push');
let inRange = [];
Object.keys(range).reduce((arr, key) => {
  // for push() to work we need to define an initial array first (inRange)  !!
  // otherwise we get TypeError: Cannot read property 'push' of undefined   !!
  // but then it doesn't make a sense to use reduce() at all                !!
  if (range[key] > lowSize) inRange.push(Number(key));
  // or ...
  // range[key] > lowSize && inRange.push(Number(key));
}, []);   // if initial [] is missing the result will be wrong !!!
console.timeEnd('reduce with push');   // 0.24 ms

// ... add console.log() and || for debugging:
// Object.keys(range).reduce((arr, key) => {
  // return console.log(range[key]) || range[key] > lowSize ? arr.concat(Number(key)) : arr;
// }, []);

// console.log('Reduce result with concat:', res);
// console.log('Reduce result with push:', inRange);

// ____ Spread ____
console.time('reduce with spread');
let resSpr = Object.keys(range).reduce((arr, key) => range[key] > lowSize ? [...arr, Number(key)] : arr, []);

console.timeEnd('reduce with spread');      // 0.28 - 0.3 ms

// console.log(resSpr2);

// ____ forEach ____
console.time('forEach with concat');
let inRange2 = [];
Object.keys(range).forEach(key => {
  range[key] > lowSize ? inRange2 = inRange2.concat(Number(key)) : inRange2;
});
console.timeEnd('forEach with concat');   // 0.22 ms

console.time('forEach with push');
let inRange3 = [];
Object.keys(range).forEach(key => range[key] > lowSize && inRange3.push(Number(key)));
console.timeEnd('forEach with push');   // 0.21 ms fastest !

// console.log('ForEach results with concat:', inRange2);
// console.log('ForEach results with push:', inRange3);

// ____ Map ____
// With map() we CAN'T skip the unwanted values so reduce or forEach are better here !!!
// let resMap = Object.keys(range).map(key => {
//   // if (range[key] > lowSize) return Number(key);  // => [ 1, undefined, 3, 4, undefined ]
//   return range[key] > lowSize && Number(key);  // => [ 1, false, 3, 4, false ]
// });

// console.log('Map result:', resMap);
