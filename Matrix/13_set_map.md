# Set, WeakSet, Map, WeakMap

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
