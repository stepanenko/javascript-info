
const array = ['a', 'b'];
const elements = [0, 1];

array.push.apply(array, elements);
[].push.apply(array, [2, 3]);
Array().push.apply(array, [4, 5]);
new Array().push.apply(array, [6, 7]);

console.log(array); // [ 'a', 'b', 0, 1, 3, 4 ]

const numbers = [5, 6, 2, 3, 7];

const max = Math.max(numbers);  // max => NaN
const max2 = Math.max(...numbers);  // 7
const max3 = Math.max.apply(null, numbers);  // 7

console.log(max);
console.log(max2);
console.log(max3);
