
// Write a function that accepts two parameters.
// First parameter is the target number, and second parameter is an array.
// Function will try to find the first numbers that correctly multiplies to the first parameter.
// For example:
// test(9, [3, 3, 5, 8]) => [3, 3], because 3 * 3 === 9
// test(9, [1, 8, 2, 3, 9]) => [1, 9],  because 1 * 9 === 9

function test(target, numbers = []) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] * numbers[j + 1] === target) {
        return [numbers[i], numbers[j + 1]];
      }
    }
  }

  return [];
}

let arr2 = [3, 3, 5, 8];
let arr = [5, 2];

let output = test(9, arr);
console.log(output);
