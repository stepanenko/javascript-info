
let user = {
  name: 'Serhiy'
};
let id = Symbol('id');

user[id] = 'some id';

console.log(user[id]);    // some id

// Symbols are skipped by for…in, but:
let clone = Object.assign({}, user);
console.log(clone);    // { name: 'Serhiy', [Symbol(id)]: 'some id' }

// We can only use strings or symbols as keys in objects.
// Other types are converted to strings.
let ex = {
  0: 'test'    // same as "0": "test"
}
