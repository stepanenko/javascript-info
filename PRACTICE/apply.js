
const array = ['a', 'b'];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

const numbers = [5, 6, 2, 3, 7];

const max = Math.max(numbers);  // max => NaN
const max2 = Math.max(...numbers);  // Ok
const max3 = Math.max.apply(null, numbers);  // Ok
console.log(max3);