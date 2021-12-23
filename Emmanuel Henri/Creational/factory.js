
// !!! BUT as Eric Elliott said:
// Any function can return a new object. When it’s not a constructor function or class, it’s called a factory function.

// ES6 classes desugar to constructor functions, so everything that follows about constructor functions also applies to ES6 classes.

// The Difference Between a Factory and a Constructor is that 
// - Constructors force callers to use the new keyword.
// - Factories don’t. That’s it, but that has some relevant side-effects.

// Based on above the following doesnt look correct:
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class CarFactory {
  createCar(type) {
    switch (type) {
      case 'megane': return new Car(2, 'v8', 'green');
      case 'kadjar': return new Car(4, 'v12', 'grey');
    }
  }
}

const carFactory = new CarFactory();

const megane = carFactory.createCar('megane');
const kadjar = carFactory.createCar('kadjar');
// -> Car { doors: 2, engine: 'v8', color: 'green' }
//    Car { doors: 4, engine: 'v12', color: 'grey' }

console.log(megane);
console.log(kadjar);