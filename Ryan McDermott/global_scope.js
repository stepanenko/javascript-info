// Don't write to global functions

// Bad:

// Array.prototype.diff = function diff(comparisonArray) {
//   const hash = new Set(comparisonArray);
//   return this.filter(elem => !hash.has(elem));
// };

// Good:

class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}

// Usage
let sa = new SuperArray().concat(1, 2, 3);
let diff = sa.diff([0, 1, 1]);

console.log(sa); // SuperArray(3) [ 1, 2, 3 ]
console.log(diff); // SuperArray(2) [ 2, 3 ]
