
let map = new Map();

map.set(1, 'one');
map.set(2, 'two');
map.set('ok', 234, 45); // third arg is skipped
// => Map { 1 => 'one', 2 => 'two', 'ok' => 234 }

// Regular Object would convert keys to string but Map keeps the type

let john = { name: 'John' };

let visitsMap = new Map();

visitsMap.set({ name: 'Bill', age: 33 }, 23)
  .set('Sam', 65)
  .set(john, 23)
  .set(john, 34);  // gets overwritten

let visitor = visitsMap.get('Sam');  // 65

console.log(visitsMap);

// Using objects as keys is one of most notable and important Map features.
// For string keys, Object can be fine, but not for object keys.

// For looping over a map, there are 3 methods:

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable);   // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount);   // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry);   // cucumber, 500 (and so on)
}

// Besides that, Map has a built-in forEach method, similar to Array:
// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  // console.log(map);   // logs entire Map
  console.log(`${key}: ${value}`);   // cucumber: 500 etc
});

// The iteration goes in the same order as the values were inserted.
// Map preserves this order, unlike a regular Object.

let saraObj = { name: 'Sara', job: 'coder' };

let mapSara = new Map(Object.entries(saraObj));
// => Map { 'name' => 'Sara', 'job' => 'coder' }
