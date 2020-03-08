
let obj = { n: '1', b: true };

let copy = { ...obj, c: null };
console.log(copy);

let objA = { a: '3' };
let objB = { x: '3' };
let both = Object.assign(objA, objB);
console.table([objA, objB, copy]);
