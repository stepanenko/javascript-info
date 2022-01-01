
const user = {
  name: 'Serhiy'
};

const id = Symbol('id');
const id2 = Symbol('id');
console.log(id === id2); // false

user[id] = 'some id';

console.log(user[id]);    // some id

// Symbols are skipped by for...in, but:
const clone = Object.assign({}, user);
console.log(clone);    // { name: 'Serhiy', [Symbol(id)]: 'some id' }

// We can only use strings or symbols as keys in objects.
// Other types are converted to strings.
const ex = {
  0: 'test'    // same as "0": "test"
};

/// Global Symbols:
const gls = Symbol.for('myKey'); // if not exist will be created

const gls2 = Symbol.for('myKey'); // will be retrieved from Global Symbol registry

console.log(gls === gls2); // true
