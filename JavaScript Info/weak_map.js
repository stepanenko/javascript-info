
// The first difference from Map is that WeakMap keys must be objects, not primitive values:

let weak = new WeakMap();

let obj = {};

weak.set(obj, "ok");   // works fine (object key)

// can't use a string as the key
weak.set("test", "Whoops");   // TypeError: Invalid value used as weak map key
