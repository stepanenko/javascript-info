
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
