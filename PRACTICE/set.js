
// FROM: https://javascript.info/map-set
// TASK: Let arr be an array. Create a function unique(arr) that should return an array with unique items of arr.

// Solution 1:
function unique(arr) {
  let set = new Set(arr);
  let uniq = [];
  set.forEach(val => uniq.push(val));
  return uniq;
}

// Solution 2:
function unique2(arr) {
  let set = new Set();
  let uniq = [];
  for (let el of arr) {
    set.add(el);
  }
  for (const val of set) {
    uniq = uniq.concat(val);
  }
  return uniq;
}

// Given solution:
function unique3(arr) {
  return Array.from(new Set(arr));
}

const values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const output = unique3(values); // Hare, Krishna, :-O
console.log(output);
