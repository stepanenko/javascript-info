
class User {
  constructor(name) { this.name = name; }
  sayHi() { console.log(this.name); }
}
let jack = new User('Jack');

// class is a function:
console.log(typeof User); // function

// ... more precisely a constructor method:
console.log(User === User.prototype.constructor); // true

// methods are in User.prototype:
console.log(User.prototype.sayHi); // [Function: sayHi]

// ...there are two methods:
console.log(Object.getOwnPropertyNames(User.prototype)); // [ 'constructor', 'sayHi' ]

// Class is not just a syntactic suger:
// rewriting class User in pure functions:

function User2(name) {
  this.name = name;
}

User2.prototype.greet = function() {
  console.log('Hello,', this.name);
}

let tom = new User2('Tom');
tom.greet();

for (let prop in jack) {
  console.log(`${prop}: ${jack[prop]}`); // name
}

for (let prop in tom) {
  console.log(prop); // name, greet
}