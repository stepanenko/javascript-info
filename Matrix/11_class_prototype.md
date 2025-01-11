# Class, Prototyping

## Class

JavaScript classes, introduced in ECMAScript 2015 (ES6), provide a structured way to create objects and facilitate object-oriented programming (OOP) principles.

- Each class can have a special method called `constructor()`, which is automatically invoked when an instance of the class is created.
- The constructor initializes properties of the object:
```js
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
```
- Instances of a class are created using the `new` keyword, which calls the constructor:
```js
const myCar = new Car("Ford", 2014);
```
- Methods can be defined inside a class just like functions. These methods can access the properties of the instance using `this`:
```js
class Car {
    constructor(name, year) { ... }

    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}
```
- Static methods belong to the class itself rather than any instance. They are defined using the `static` keyword and are typically used for utility functions:
```js
class MathUtil {
    static add(x, y) {
        return x + y;
    }
}
console.log(MathUtil.add(5, 3)); // Outputs: 8
```
- Classes can inherit from other classes using the `extends` keyword, allowing for code reuse and extending functionality:
```js
class Vehicle {
    constructor(name) {
        this.name = name;
    }
}
class Car extends Vehicle {
    constructor(name, year) {
        super(name); // Calls the parent class constructor
        this.year = year;
    }
}
const myCar = new Car("Ford", 2014);
```
- Classes can define getters and setters to control access to properties:
```js
class Person {
    constructor(name) {
        this._name = name; // Private property convention
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
}
const person = new Person("Alice");
console.log(person.name); // Outputs: Alice
person.name = "Bob"; // Sets a new name
```

# Prototype

Every JavaScript object has an internal property called `[[Prototype]]`, which can be accessed via the `__proto__` property. This prototype is another object from which the original object inherits properties and methods.
The prototype itself can have its own prototype, forming a prototype chain. This chain allows for property and method lookups to traverse up through parent objects until reaching `Object.prototype`, which is the root of all objects in JavaScript.

## `Object.create(proto)`
Use `Object.create()` for creating objects with specific prototypes:
```js
const personPrototype = {
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};

const alice = Object.create(personPrototype);
alice.name = "Alice";
alice.greet(); // Outputs: Hello, my name is Alice!
```

## Constructor Functions
When a function is called with the `new` keyword, a new object is created, and its prototype is set to the constructor's `prototype` property. Defining methods on an object's prototype rather than within the constructor saves memory because all instances share the same method reference instead of each instance having its own copy.  
So define shared methods on prototypes to optimize memory usage:
```js
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}!`);
};

const bob = new Person("Bob");
bob.greet(); // Outputs: Hello, my name is Bob!
```

## Inheritance

Prototypal inheritance allows one object to inherit properties and methods from another. This can be achieved by setting an object's prototype to another object or constructor's prototype:

```js
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name); // Call parent constructor
}

// Set Dog's prototype to Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog("Rex");
dog.speak(); // Outputs: Rex makes a noise.
```
