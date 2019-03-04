
let user = {
  name: 'Serhiy'
};
let id = Symbol('id');

user[id] = 'some id';

console.log(user[id]);

// Symbols are skipped by for…in
