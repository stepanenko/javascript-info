
// let proxy = new Proxy(target, handler);
// target – is an object to wrap, can be anything, including functions.
// handler – proxy configuration: an object with “traps”, methods that intercept operations:
// – e.g. get trap for reading a property of target, set trap for writing a property into target, and so on.

// let’s create a proxy without any traps:
let target = {};
let proxy2 = new Proxy(target, {}); // empty handler

proxy2.test = 5; // writing to proxy 5
console.log(proxy2.test); // 5, we can read it from proxy too

for (let key in proxy2) console.log(key); // test, iteration works


// example 1:
const letters = ['a', 'b', 'c'];

const proxy3 = new Proxy(letters, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 'no such letter';
    }
  }
});

console.log(proxy3[4]);   // no such letter
console.log(proxy3[1]);   // b

// example 2:
let numbers = [3, 5, 2];

numbers = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 0;
    }
  }
});

console.log(numbers[1]);   // 5
console.log(numbers[6]);   // 0

// example 3:
let dictionary = {
  'Hello': 'Hola',
  'Bye': 'Adiós'
};

dictionary = new Proxy(dictionary, {
  get(target, phrase) { // intercept reading a property from dictionary
    if (phrase in target) { // if we have it in the dictionary
      return target[phrase]; // return the translation
    } else {
      // otherwise, return the non-translated phrase
      return phrase;
    }
  }
});

// Look up arbitrary phrases in the dictionary! At worst, they're not translated.
console.log(dictionary['Hello']);   // Hola
console.log(dictionary['Welcome to Proxy']);   // Welcome to Proxy (no translation)

//   Internal Method  	 |    Handler Method      |     Triggers when…
// ----------------------------------------------------------------
// [[Get]]               	    get	                      reading a property
// [[Set]]               	    set	                      writing to a property
// [[HasProperty]]       	    has	                      in operator
// [[Delete]]           	    deleteProperty            delete operator
// [[Call]]              	    apply	                    function call
// [[Construct]]              construct	                new operator
// [[GetPrototypeOf]]    	    getPrototypeOf	          Object.getPrototypeOf
// [[SetPrototypeOf]]	        setPrototypeOf	          Object.setPrototypeOf
// [[IsExtensible]]	          isExtensible	            Object.isExtensible
// [[PreventExtensions]] 	    preventExtensions	        Object.preventExtensions
// [[DefineOwnProperty]]	    defineProperty	          Object.defineProperty, Object.defineProperties
// [[GetOwnProperty]]    	    getOwnPropertyDescriptor	Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries
// [[OwnPropertyKeys]]   	    ownKeys	                  Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object/keys/values/entries


// Continue at https://javascript.info/proxy