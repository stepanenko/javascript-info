
// ?? -> Nullish coalescing operator
// To work it requires modern browser or Nodejs >= 14.5

let a;
let b = 5;

let x = a ?? b;
// short equivalent to:
let x2 = (a !== null && a !== undefined) ? a : b;

console.log(x);   // 5



// https://javascript.info/nullish-coalescing-operator