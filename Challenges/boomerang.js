
// A boomerang is a V-shaped sequence that is either upright or upside down.
// Specifically, a boomerang can be defined as: sub-array of length 3,
// with the first and last digits being the same and the middle digit being different.

function countBoomerangs(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      result.push([arr[i], arr[i + 1], arr[i + 2]]);
    }
  }
  
  return result.length;
}

// Given sol 1:
function countBoomerangs2(arr) {
  //\\//   1 + true = 2,   1 + false = 1,  true + true = 2,  true + false = 1   \\//\\
  return arr.reduce((acc, el, index) => acc + (el === arr[index + 2] && el !== arr[index + 1]), 0);
}

console.log(countBoomerangs2([9, 5, 9, 5, 1, 1, 1])); // => 2
console.log(countBoomerangs2([5, 6, 6, 7, 6, 3, 9])); // => 1
console.log(countBoomerangs2([4, 4, 4, 9, 9, 9, 9])); // => 0
