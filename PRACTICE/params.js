
let a;
let b = 0;
let c = 3;

function double(num) {
  return num * 2;
}

const out = double(a || b || c);
console.log(out);   // 6
