'use strict';

const arr1 = ['one', 'two', 'three'];
const arr2 = ['uno', 'due', 'tre'];
Object.setPrototypeOf(arr2, arr1);

console.log({ arr1, arr2 });
delete arr2[1];
console.log({ arr2 });
console.log(arr2[0], arr2[1], arr2[2]);
