
const object = {
  a: 1,
  b: 2,
  c: 3,
};

const entries = Object.entries(object);   // [['a', 1], ['b', 2], ['c', 3]]

const newArray = entries.map(([key, value]) => [key, value * 2]);   // [['a', 2], ['b', 4], ['c', 6]]

const newObject = newArray.reduce((accumulator, [key, value]) => {
  accumulator[key] = value;
  return accumulator;
}, {});

// also works using forEach and mutating an object
const newObject2 = {};
entries.forEach(([key, value]) => {
  newObject2[key] = value * 2;
});

console.log(newObject);   // { a: 2, b: 4, c: 6 }
console.log(newObject2);   // { a: 2, b: 4, c: 6 }


const object1 = {
  a: 1,
  b: 2,
  c: 3
};

// Now suppose you want to change the value of b to 22, you can do this by:
// Object.assign(target, ...sources)

const object2 = Object.assign({}, object1, { b: 22 });

console.log(object1);  // { a: 1, b: 2, c: 3 } not mutated
console.log(object2);  // { a: 1, b: 22, c: 3 }

// Airbnb's JavaScript Style Guide() {} says that:
// Prefer the object spread operator over Object.assign to shallow-copy objects.

// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` 
delete copy.a; // so does this

// bad
const original2 = { a: 1, b: 2 };
const copy2 = Object.assign({}, original2, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original3 = { a: 1, b: 2 };
const copy3 = { ...original3, c: 3 }; // copy => { a: 1, b: 2, c: 3 }
