
// Create a function that takes an array of numbers and return "Boom!" if the
// number 7 appears in the array. Otherwise, return "there is no 7 in the array"

let arr = [1, 2, 3, 4, 5, 6];

// Solution 1:
function sevenBoom(arr) {
  if (arr.some(number => (number + '').includes('7'))) return 'Boom!';
  return 'there is no 7 in the array';
}

// Sol 2
function sevenBoom2(arr) {
  if (arr.some(number => String(number).includes('7'))) return 'Boom!';
  return 'there is no 7 in the array';
}

// Given sol 1:
function sevenBoom3(arr) {
  return /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
}

console.log(sevenBoom3([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom3([8, 6, 33, 100]));
console.log(sevenBoom3([2, 55, 60, 97, 86]));
