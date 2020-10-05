
// Challenges from http://csbin.io/functional

// Higher-Order Functions
// Challenge 3:
const map = (array, callback) => {
  let result = [];
  for (let num of array) {
    result.push(callback(num));
  }
  return result;
};

const multBy2 = (num) => {
  return num * 2;
};

console.log(map([1, 2, 3, 4, 5], multBy2)); // [ 2, 4, 6, 8, 10 ]

// Challenge 4:
// The function forEach takes an array and a callback, and runs the
// callback on each element of the array. forEach does not return anything.
const forEach = (array, callback) => {
  for (let el of array) {
    callback(el);
  }
};

let alf = '';
let letters = ['a', 'b', 'c'];
forEach(letters, function (char) {
  alf = alf + char;
});
console.log(alf); // abc

// Challenge 5:
// For this challenge, you're going to rebuild map as mapWith.
// This time you're going to use forEach inside of mapWith instead of using a for loop.
const mapWith = (array, callback) => {
  let res = [];
  forEach(array, el => {
    res.push(callback(el));
  });
  return res;
};

let mywith = mapWith([1, 2, 3], multBy2); // [ 2, 4, 6 ]
console.log(mywith);