
// The simplest way to implement a mixin in JavaScript is to make an object with useful methods,
// so that we can easily merge them into a prototype of any class.

// For instance here the mixin sayHiMixin is used to add some “speech” for User:

let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  }
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
