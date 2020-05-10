
let myobj = { n: '1', b: true };

let copy = { ...myobj, c: null };
console.log(copy);

let objA = { a: '3' };
let objB = { x: '3' };
let both = Object.assign(objA, objB);

console.log([objA, objB, copy]);
console.table([objA, objB, copy]);   // console.table takes an Array as an argument

class BaseClass {
  foo() { return 1; }
}

class MyClass extends BaseClass {
  bar() { return 2; }
}

const obj = new MyClass();
obj.baz = function() { return 3; };
obj[Symbol.for('test')] = 4;

// Does NOT copy any properties from `MyClass` or `BaseClass` !
const clone = { ...obj };

console.log(clone);   // { baz: [Function], [Symbol(test)]: 4 }
console.log(clone.constructor.name);   // Object
console.log(clone instanceof MyClass);   // false

// === Order matters: ===
// the object spread operator will overwrite properties that are defined before it, but not after.

const obj2 = { a: 'a', b: 'b', c: 'c' };
const obj3 = { a: 1, b: null, c: void 0, ...obj2 };   // { a: 'a', b: 'b', c: 'c' }
const obj4 = { a: 1, b: null, ...obj2, c: void 0 };   // { a: 'a', b: 'b', c: undefined }
const obj5 = { a: 1, ...obj2, b: null, c: void 0 };   // { a: 'a', b: null, c: undefined }
const obj6 = { ...obj2, a: 1, b: null, c: void 0 };   // { a: 1, b: null, c: undefined }

console.table([obj3, obj4, obj5, obj6]);
