
function list1() {
  return Array.prototype.slice.call(arguments);
}

function list2() {
  // ...or reduced option:
  return [].slice.call(arguments);
}

let l1 = list1(1, 2, 3);   // [1, 2, 3]
let l2 = list2(1, 2, 3);   // [1, 2, 3]

// ...or it can be simplified using bind:
let unboundSlice = Array.prototype.slice;
let slice = Function.prototype.call.bind(unboundSlice);

function list3() {
  return slice(arguments);
}

let l3 = list3(1, 2, 3);   // [1, 2, 3]
let l4 = slice([1, 2, 3]);   // [1, 2, 3]

console.log(l1, l2, l3, l4);