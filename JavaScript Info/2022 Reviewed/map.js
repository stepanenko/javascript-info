
const map = new Map();

map.set(1, 'one');
map.set(2, 'two');
map.set('ok', 234, 45); // third arg is skipped
// => Map { 1 => 'one', 2 => 'two', 'ok' => 234 }

// Regular Object converts keys to string but Map keeps the type

const john = { name: 'John' };

const visitsMap = new Map();

visitsMap.set({ name: 'Bill', age: 33 }, 23)
  .set('Sam', 65)
  .set(john, 23)
  .set(john, 34);  // gets overwritten

const visitor = visitsMap.get('Sam');  // 65

// Using objects as keys is one of most notable and important Map features. !!!
// For string keys, Object can be fine, but not for object keys.

// For looping over a map, there are 4 methods: !!!

const recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50]
]);

// iterate over keys (vegetables)
for (const vegetable of recipeMap.keys()) {
  console.log(vegetable);   // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (const amount of recipeMap.values()) {
  console.log(amount);   // 500, 350, 50
}

// iterate over [key, value] entries
for (const entry of recipeMap) {   // the same as of recipeMap.entries()
  console.log(entry);   // cucumber, 500 (and so on)
}

// Besides that, Map has a built-in forEach method, similar to Array:
// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  // console.log(map);   // logs entire Map
  console.log(`${key}: ${value}`);   // cucumber: 500, tomatoes: 350 ...
});

// The iteration goes in the same order as the values were inserted.
// Map preserves this order, unlike a regular Object.  !!!

const saraObj = { name: 'Sara', job: 'coder' };
const saraEntries = Object.entries(saraObj);
// => [ [ 'name', 'Sara' ], [ 'job', 'coder' ] ]

// Convert object to Map:
const mapSara = new Map(saraEntries);
console.log('mapSara', mapSara);
// => Map { 'name' => 'Sara', 'job' => 'coder' }

// Convers from entries to object:
const prices = Object.fromEntries([['banana', 1], ['orange', 2]]);  // needs nodejs v.12.4+ !!!
// => { banana: 1, orange: 2 }
