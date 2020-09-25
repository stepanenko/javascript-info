
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

const civic = new Car(4, 'V8', 'blue');

console.log(civic); // Car { doors: 4, engine: 'V8', color: 'blue' }
