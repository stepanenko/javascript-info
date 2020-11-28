
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = (...objects) => ({ ...objects });
const mergeToArray = (...objects) => [...objects];

let mergedObj1 = merge(obj1, obj2);
console.log(mergedObj1); // => { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }
let mergedObj2 = mergeToArray(obj1, obj2);
console.log(mergedObj2); // => [ { foo: 'bar', x: 42 }, { foo: 'baz', y: 13 } ]
