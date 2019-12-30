
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
