
From the MDN doc:

> JS classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance.
> The class syntax does not introduce a new object-oriented inheritance model to JavaScript.

So this...
```
class TestClass {
  constructor(myName) {
    this.name = myName;
  }

  getName() {
    return this.name;
  }

  static getName2() {
    return 'getName2 result';
  }
}
```
...is exactly equivalent to this:
```
const TestClass = function(myName) {
  this.name = myName;
}

TestClass.prototype.getName = function() {
  return this.name;
}

TestClass.getName2 = function() {
  return 'getName2 result';
}
```
