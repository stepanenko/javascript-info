
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

// There’s no inheritance, but a simple method copying. ser may inherit from another class and also include the mixin to “mix-in” the additional methods.

// Mixins can make use of inheritance inside themselves. Here sayHiMixin inherits from sayMixin:
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  }
};

let sayHiMixin2 = {
  __proto__: sayMixin, // or we could use Object.setPrototypeOf to set the prototype here

  sayHi() {
    // call parent method
    super.say(`Hello ${this.name}`); // (*)
  },
  sayBye() {
    super.say(`Bye ${this.name}`); // (*)
  }
};

class User2 {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User2.prototype, sayHiMixin2);

// now User can say hi
new User("Bill").sayHi(); // Hello Dude!

// Please note that the call to the parent method super.say() from sayHiMixin (*)
// looks for the method in the prototype of that mixin, not the class.
