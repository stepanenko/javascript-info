
// You only should use Object.create in very specific cases, such as:
// - You want to choose prototype object to inherit to, without the need to define constructor:

let Vehicle = {
  type: 'General',
  display: function () { console.log(this.type); }
}

let Car = Object.create(Vehicle);
Car.type = 'Car';
Car.display();

Vehicle.display();

// In general, like in Array, do not use built-in constructor over literal in creating new object, because:
// - More typing
// - Slower performance (much much slower)
// - Confusion & increasing more chances for mistake, for example:
// let obj = new Object(id: 1, name: "test") // Error - obviously
let obj1 = { id: 1, name: "test" };
let obj2 = new Object(obj1); // obj1 and obj2 points to the same one
obj2.id = 2;
console.log(obj1.id); // 2

