
const items = ["milk", "water", "milk", "water", "milk", "bread"];

let result = {};

for (let i = 0; i < items.length; i++) {
  if (result[items[i]]) result[items[i]]++;
  else result[items[i]] = 1;
}

console.log(result);

console.log(Object.keys(result));
