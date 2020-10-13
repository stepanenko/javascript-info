
const add2 = (val) => val + 2;
const multBy2 = (val) => val * 2;
const minus2 = val => val - 2;

const operations = [add2, multBy2, minus2];

// Approach 1 (not functional, has mutation):
let number = 6;
operations.forEach(fn => number = fn(number));
console.log(number);


// Approach 2:
const process = (arr, value) => {
  return arr.reduce((acc, fn) => {
    return fn(acc);
  }, value);
}

let output = process(operations, 6);

console.log(output);
