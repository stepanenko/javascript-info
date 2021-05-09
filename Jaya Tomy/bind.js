
// You can explicit bound this by using helper functions apply , bind , or call:
function greet(isLoud) {
  if (isLoud) {
    console.log('YOYOYOYO! I am ' + this.name + '!!!');
  } else {
    console.log('Hi, I am ' + this.name);
  }
}

const ben = {
  name: "Ben"
}

greet.apply(ben, [true]); //=> YOYOYOYO! I am Ben!!!
greet.call(ben, false); //=> Hi, I am Ben
const benGreeting = greet.bind(ben);
benGreeting(true); //=> YOYOYOYO! I am Ben!!!


//// Quiz: Let's test our understanding with an example:
const batman = {
  _name: 'Bruce Wayne',
  getSecretIdentity: function () {
    return this._name;
  }
}
const stealIdentity = batman.getSecretIdentity; // stealIdentity's lexical scope is now empty.
// How can we make this point to batman?
// i.e. How to make the below stealIdentity work?

console.log(stealIdentity()); // undefined, but should be: 'Bruce Wayne'


//// Answer:
console.log(stealIdentity.bind(batman)());
// bind returns a function, and we immediately invoke it.
// OR:
console.log(stealIdentity.apply(batman));
// OR:
console.log(stealIdentity.call(batman));

// Note that since getSecretIdentity doesn't require any argument,
// the solution using apply and call look exactly the same.
