
function createMult(y) {
  return function(x) {
    return x * y;
  }
}

const doub = createMult(2);

let out = doub(5);
console.log(out);

//\\//\\//\\//\\
const createMultiplier = y => x => x * y;   // same as createMult

const double = createMultiplier(2);
const triple = createMultiplier(3);

let output = double(5);
console.log(output);
