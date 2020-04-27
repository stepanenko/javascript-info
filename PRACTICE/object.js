
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

console.log(object1);  // { a: 1, b: 2, c: 3 } 
console.log(object2);  // { a: 1, b: 22, c: 3 } 