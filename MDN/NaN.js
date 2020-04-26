
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitise('1'));
// expected output: "1"

console.log(sanitise('NotANumber'));
// expected output: NaN

// NaN, and only NaN, will compare unequal to itself:
function valueIsNaN(v) {
  return v !== v;
}

console.log(valueIsNaN(1));          // false
console.log(valueIsNaN(NaN));        // true
