
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class BigCar extends Car {
  constructor(doors, engine, color, model) {
    super(doors, engine, color);
    this.model = model;
  }
}

const tractor = new BigCar(2, 'v12', 'grey', 'Fields');
// -> BigCar { doors: 2, engine: 'v12', color: 'grey', model: 'Fields' }

