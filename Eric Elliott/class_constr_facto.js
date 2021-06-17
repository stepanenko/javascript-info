
// class
class ClassCar {
    drive() {
        console.log('Vroom!');
    }
}

const car1 = new ClassCar();
console.log(car1.drive());


// constructor
function ConstructorCar() { }

ConstructorCar.prototype.drive = function () {
    console.log('Vroom!');
};

const car2 = new ConstructorCar();
console.log(car2.drive());


// factory
const obj = {
    drive() {
        console.log('Vroom!');
    }
};

// const factoryCar = () => Object.create(obj);

function factoryCar() {
    return Object.create(obj);
}

const car3 = factoryCar();
car3.name = "Renault";
console.log('car3:', car3); // car3: { name: 'Renault' }
console.log(car3.drive());
console.log('proto:', car3.__proto__); // logs "proto: { drive: [Function: drive] }"

// Each of these strategies stores methods on a shared prototype, and optionally supports
// private data via constructor function closures. In other words, they have mostly the same features,
// and could mostly be used interchangeably.

// In JavaScript, any function can return a new object. When it’s not a constructor function or class,
// it’s called a factory function.

// ES6 classes desugar to constructor functions, so everything that follows about constructor functions
// also applies to ES6 classes:

class Foo { }
console.log(typeof Foo); // function



// https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e