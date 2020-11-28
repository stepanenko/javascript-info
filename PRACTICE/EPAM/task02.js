
const items = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 1, name: 'd' },
  { id: 3, name: 'f' }
];

let result = [];

items.forEach(elem => {
  let existingItem = result.find((item) => item.id === elem.id);
  if (existingItem) {
    existingItem.name.push(elem.name);
  } else {
    result.push({
      id: elem.id,
      name: [elem.name]
    });
  }
});

console.log(result);

// Expected output:
// const result = [
//   { id: 1, names: ['a', 'd'] },
//   { id: 2, names: ['b'] },
//   { id: 3, names: ['c', 'f'] },
// ];

 // Try to solve with reduce method, also try to store result in an object or use Map / Set
