
let instance = null;

class Car {
  constructor(doors, engine, color) {
    if (!instance) {
      this.doors = doors;
      this.engine = engine;
      this.color = color;
      instance = this;
    } else {
      return instance;
    }
  }
}

const megane = new Car(2, 'v8', 'green');
const kadjar = new Car(4, 'v12', 'grey');
// -> Car { doors: 2, engine: 'v8', color: 'green' }
//    Car { doors: 2, engine: 'v8', color: 'green' }

console.log(megane);
console.log(kadjar);