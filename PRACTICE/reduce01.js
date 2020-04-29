
const range = {1: "581", 2: "1852", 3: "442", 4: "1072", 5: "627", 6: "974", 7: "907", 8: "1044", 9: "439", 10: "324", 11: "635", 12: "88", 13: "65", 14: "1654", 15: "857", 16: "930", 17: "539", 18: "643", 19: "359", 20: "444", 21: "556", 22: "469", 23: "245", 24: "154", 25: "571", 26: "269"};
const lowSize = 900;


// Improve this code with reduce or map:
console.time('for in');
let inSizeRange = [];
for (let key in range) {
  if (range.hasOwnProperty(key)) {
    parseInt(range[key]) > lowSize
      ? inSizeRange.push(parseInt(key))
      : inSizeRange;
  }
}
console.timeEnd('for in');  // 0.3 - 0.6 ms
console.log('Correct result:', inSizeRange);   // [ 1, 4, 5 ] correct


// ____ Reduce ____
console.time('reduce');
let res = Object.keys(range).reduce((arr, key) => {
  return range[key] > lowSize ? arr.concat(Number(key)) : arr;
}, []);
console.timeEnd('reduce');   // 0.2 - 0.4 ms

// ... add console.log() and || for debugging:
// Object.keys(range).reduce((arr, key) => {
//   return console.log(range[key]) || range[key] > lowSize ? arr.concat(Number(key)) : arr;
// }, []);

console.log('Reduce result:', res);

// ____ Map ____
// With map() we cant skip the unwanted value so reduce wins here !!!
let resMap = Object.keys(range).map(key => {
  // if (range[key] > lowSize) return Number(key);  // => [ 1, undefined, 3, 4, undefined ]
  return range[key] > lowSize && Number(key);  // => [ 1, false, 3, 4, false ]
});

// console.log('Map result:', resMap);
