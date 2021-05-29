// Hash Table
// Given an array of numbers, find a pair of numbers that adds up to 10

const array = [5, 3, 4, 8, 4, 2, 1, 9]; // -> [1, 9] or [8, 2]
const array2 = [5, 30, 4, 2, -20]; // -> [30, -20]
const array3 = [5, 3, 4, 8, 4, 1, 1, 8]; // -> "No such pair was found"

// O(n) My Solution:

function findPair(arr) {
  const numbersSeen = {};

  for (const item of arr) {
    // console.log(numbersSeen);
    const wanted = 10 - item;

    if (wanted in numbersSeen) return [wanted, item];
    // OR:
    // if (numbersSeen[wanted]) return [wanted, item];

    numbersSeen[item] = true; // can be any truthy value, e.g. 1, '+'
  }

  return "No such pair was found";
}

let res = findPair(array2);
console.log(res);
