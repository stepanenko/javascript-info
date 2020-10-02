
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