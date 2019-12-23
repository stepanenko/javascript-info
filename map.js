
let map = new Map();

map.set(1, 'one');
map.set(2, 'two');
map.set('ok', 234, 45);

// Regular Object would convert keys to string but Map keeps the type


let john = { name: 'John' }

let visitsMap = new Map();

visitsMap.set(john, 23);

console.log(visitsMap.get(john)); // 23
