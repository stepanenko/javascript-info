
let arr = [];
let ar1 = [1];
let ar2 = [2, 'ok'];

arr.push(...[], [5], ...[3]);

arr = arr.concat(ar1, ar2)

console.log(arr); // [ [ 5 ], 3, 1, 2, 'ok' ]
