# Set, Map, WeakSet, WeakMap

## Set

`Set` is a collection of unique values, meaning it does not allow duplicate values.

### Key Features
- Unique Values: Sets automatically eliminate duplicates, ensuring that each value is unique.  
- Fast Lookup: Checking if a value exists in a set is very efficient, with an average time complexity of O(1).  
- Ordered Iteration: Values are iterated in the order they were inserted.

### Methods
- `new Set()`: Creates a new empty set.
- `add(value)`: Adds a new value to the set.
- `has(value)`: Returns `true` if the value exists, `false` otherwise.
- `delete(value)`: Removes a value from the set.
- `clear()`: Removes all values from the set.
- `size`: Returns the number of values in the set.

```js
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNumbers);       // Set(5) {1, 2, 3, 4, 5}
console.log(uniqueNumbers.size);  // Outputs: 5
```

### Iteration
```js
const colors = new Set(['red', 'green', 'blue']);
for (const color of colors) {
    console.log(color);
}
// Using forEach
colors.forEach(color => console.log(color));
```
---
## Map

`Map` is a collection of keyed data items, just like an `Object`.  
But the main difference is that `Map` allows keys of any type.  
Also, `Map` preserves the insertion order of its values, unlike a regular `Object`.

Methods and properties are:

- `new Map()` – creates the map.
- `map.set(key, value)` – stores the value by the key.
- `map.get(key)` – returns the value by the key, undefined if key doesn’t exist in map.
- `map.has(key)` – returns true if the key exists, false otherwise.
- `map.delete(key)` – removes the element (the key/value pair) by the key.
- `map.clear()` – removes everything from the map.
- `map.size` – returns the current element count.

For instance:
```js
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert(map.get(1));    // 'num1'
alert(map.get('1'));  // 'str1'

alert(map.size);  // 3
```

### For looping over a `map`, there are 3 methods:

`map.keys()` – returns an iterable for keys,  
`map.values()` – returns an iterable for values,  
`map.entries()` – returns an iterable for entries [key, value], it’s used by default in `for...of`.  

---

## WeakMap and WeakSet

JavaScript engine keeps a value in memory while it is “reachable” and can potentially be used:
```js
let john = { name: "John" }; // the object can be accessed, john is the reference to it
john = null; // overwrite the reference
// the object will be removed from memory
```
If we put an object into an array, then while the array is alive, the object will be alive as well, even if there are no other references to it:
```js
let john = { name: "John" };
let array = [john];
john = null; // overwrite the reference

// the object stored inside the array won't be garbage-collected
array[0] // { name: "John" }
```
If we use an object as the key in a regular `Map`, then while the `Map` exists, that object exists as well. It occupies memory and may not be garbage collected:
```js
let john = { name: "John" };
let map = new Map();
map.set(john, "...");
john = null; // overwrite the reference
// john is stored inside the map, we can get it by using map.keys()
```

## WeakMap
The first difference between `Map` and `WeakMap` is that keys must be objects, not primitive values.  
If we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically:
```js
let john = { name: "John" };
let weakMap = new WeakMap();
weakMap.set(john, "...");
john = null; // overwrite the reference
// john is removed from memory!
```
`WeakMap` does not support iteration and methods `keys()`, `values()`, `entries()`, so there's no way to get all keys or values from it.

`WeakMap` has only the following methods:

- `weakMap.set(key, value)`
- `weakMap.get(key)`
- `weakMap.delete(key)`
- `weakMap.has(key)`
