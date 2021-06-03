
// Object.assign() and spread don't copy inherited properties
// or class information. And they both copy ES6 Symbols.

class BaseClass {
  foo() { return 1; }
}

class MyClass extends BaseClass {
  bar() { return 2; }
}

const obj = new MyClass();
obj.baz = function () { return 3; };
obj[Symbol.for('test')] = 4;

const clone = { ...obj };

// Doesn't copy any properties from 'MyClass' or 'BaseClass':
console.log(clone); // { baz: [Function], [Symbol(test)]: 4 }
console.log(clone.constructor.name); // Object
console.log(clone instanceof MyClass); // false

const cl = Object.assign({}, obj); // { Symbol(test): 4, baz: ƒ }

// The Object.assign() is interchangeable with the spread for the above examples.
// In fact, the object spread spec explicitly states that
// { ...obj } is equivalent to Object.assign({}, obj)

// ___ BUT ___
// 1. Spread operator always gives you a POJO (Plain Old JS Object) back.
// And Object.assign() function modifies its first parameter in place:

class MyClass2 {
  set val(v) {
    console.log('Setter called', v);
    return v;
  }
}
const obj2 = new MyClass2();

// Object.assign() triggers setters, spread doesn’t:
const obj3 = Object.assign(obj2, { val: 42 }); // logs "Setter called 42"


// 2. Another difference is that spread defines new properties,
// whereas Object.assign() sets them:

const obj4 = {};

Object.defineProperty(obj4, 'myProp', {
  set: () => console.log('Setter called')
});

// Object.assign() calls setters on the target object:
Object.assign(obj4, { myProp: 42 }); // logs "Setter called"


// 3. Performance
// The two are similar, however, once you throw in an empty object parameter
// to Object.assign(), the object spread operator is consistently faster


// inspired by https://thecodebarbarian.com/object-assign-vs-object-spread.html
