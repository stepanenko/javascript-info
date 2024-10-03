## Interview Q and A

### 1. Don’t use arrow functions in constructors:

```js
function Person (name, age) {
  this.name = name;
  this.age = age;
}

const Person2 = (name, sex) => {
  this.name = name;
  this.sex = sex;
};

console.log('Person', new Person('fatfish', 100));
console.log('Person2', new Person2('fatfish', 100));
```

Q: What will this code output? Why?

A:
The constructor generates an object instance through the `new` keyword. The process of generating an object instance is also the process of binding `this` to the instance through the constructor. However, the arrow function does not have its own `this`, so it cannot be used as a constructor and cannot be called through the `new` operator.  
So the output will be: `TypeError: Person2 is not a constructor`

### 2. Do not use arrow functions in methods of objects:
```js
const obj = {
  name: 'fatfish',
  getName () {
    return this.name
  },
  getName2: () => {
    return this.name
  }
}

console.log('getName', obj.getName())
console.log('getName2', obj.getName2())
```

Q: What will this code output?

A: The `getName2` will be `undefined`. It will not print `"fatfish"`, because `this` and `window` are equivalent at this time.

### 3. Don’t use arrow functions in the prototype chain:

```js
const Person = function (name) {
  this.name = name;
}

Person.prototype.showName = function () {
  console.log('showName', this, this.name);
}

Person.prototype.showName2 = () => {
  console.log('showName2', this, this.name);
}

const p1 = new Person('fatfish', 100);

p1.showName();
p1.showName2();
```
Q: What will this code output?

A:
```
showName Person { name: 'fatfish' } fatfish
showName2 nodejs: {} undefined, broswer: Window {...}
```
