
const map = (arr, fn) => {
  let result = [];
  for (const el of arr) result.push(fn(el));
  return result;
}

const mapRed = (arr, fn) =>
  arr.reduce((acc, el) => acc.concat(fn(el)), []);

const mapR = (arr, fn) => arr.reduce((acc, el) => [...acc, fn(el)], []);


const arr = [4, 1, 7];

const output = mapR(arr, (num) => num * 2);

console.log(output);


// Wrong solution:
const mapWrong = (arr, fn) =>
  arr.reduce((acc, el) => [].push(fn(el)));

console.log('wrong', mapWrong(arr, n => n + 1)); // ?

// Interesting facts:
let exp = [].push(5, 6, [1, 2]);
console.log(exp);   // ?

let expCon = [].concat(5, 6, [1, 2, [3, 4]]);
console.log(expCon);   // ?
