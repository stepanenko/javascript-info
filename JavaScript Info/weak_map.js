
// The first difference from Map is that WeakMap keys must be objects, not primitive values:

let weak = new WeakMap();

const obj = { age: 66 };
let john = { name: 'John' };

weak.set(obj, "ok");   // works fine (object key)
weak.set(john, "good");   // works fine (object key)
weak.set({ name: 'Larry' }, "ok");

// unlike map, wekamap can't use a string as the key
// weak.set("test", "Whoops");   // TypeError: Invalid value used as weak map key

console.log(weak);   // WeakMap { <items unknown> }
console.log(weak.get(obj));   // ok
console.log(weak.get({ name: 'Larry' }));   // undefined
// If an object has lost all other references, then it is to be garbage-collected automatically
john = null;   // or 'john = {}' ...
console.log(weak.get(john));   // undefined

// WeakMap has only the following methods:
// - weakMap.get(key)
// - weakMap.set(key, value)
// - weakMap.delete(key)
// - weakMap.has(key)


// Now where do we need such data structure? ... https://javascript.info/weakmap-weakset