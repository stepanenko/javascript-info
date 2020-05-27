
let map = new Map();

map.set(1, 'one');
map.set(2, 'two');
map.set('ok', 234, 45); // third arg is skipped
// => Map { 1 => 'one', 2 => 'two', 'ok' => 234 }

// Regular Object would convert keys to string but Map keeps the type

let john = { name: 'John' }

let visitsMap = new Map();

visitsMap.set({ name: 'Bill', age: 33 }, 23);
visitsMap.set('Sam', 65);
visitsMap.set(john, 23);
visitsMap.set(john, 34);  // gets overwritten

let visitor = visitsMap.get('Sam');

console.log(visitor);   // 65
