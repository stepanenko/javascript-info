
// The first difference from Map is that WeakMap keys must be objects, not primitive values:

let weak = new WeakMap();

const obj = { age: 66 };
let john = { name: 'John' };

weak.set(obj, "ok");   // works fine (object key)
weak.set(john, "good");   // works fine (object key)
weak.set({ name: 'Larry' }, "ok");

// unlike map, weakmap can't use a string as the key
// weak.set("test", "Whoops");   // TypeError: Invalid value used as weak map key

console.log(weak);   // WeakMap { <items unknown> }
console.log(weak.get(obj));   // ok
console.log(weak.get({ name: 'Larry' }));   // undefined
// If an object has lost all other references, then it is to be garbage-collected automatically
john = {};   // or 'john = null' ...
console.log(weak.get(john));   // undefined

// WeakMap has only the following methods:
// - weakMap.get(key)
// - weakMap.set(key, value)
// - weakMap.delete(key)
// - weakMap.has(key)


// Now where do we need such data structure? ... https://javascript.info/weakmap-weakset
// ##### 1. Additional Data Storage: #####
let secretStorage = new WeakMap();
let agent = { name: 'James Bond', id: 007 };
secretStorage.set(agent, "MI6 Secret documents");
console.log(secretStorage.get(agent));   // secret documents
// if agent dies, secret documents will be destroyed automatically

let visitsCountMap = new WeakMap();
function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}
let jack = { name: 'Jack' };
countUser(jack);
console.log(visitsCountMap.get(jack));   // 1
// After john object becomes unreachable by all means except as a key of WeakMap,
// it gets removed from memory, along with the information by that key from WeakMap.

// ##### 2. Caching #####
