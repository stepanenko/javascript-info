
const arr = [1, 4, 12, 8, 3, 16];

const isGreaterThan = minNum => number => number > minNum;

const isGreater = arr.some(isGreaterThan(15));


const isLessThan = minNum => number => number <= minNum;

const areAllLess = arr.every(isLessThan(20));


console.log(isGreater);  // true
console.log(areAllLess);  // true
