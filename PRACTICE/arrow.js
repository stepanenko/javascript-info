
const test = {
  name: 'arrow test',
  anonFunc: () => {
    return function() {
      console.log(this.name);   // undefined
      console.log(arguments);   // {}
    }
  },
  arrowFunc: function() {
    return () => {
      console.log(this.name);   // arrow test
      console.log(arguments);   // { '0': 'hello', '1': 'world' }
    }
  },
  doubleArrowFunc: () => {
    return () => {
      console.log(this.name);   // undefined
      console.log(arguments);   // { '0' ... '4' }
    }
  }
}
const anon = test.anonFunc('hello', 'world');
const arrow = test.arrowFunc('hello', 'world');
const double = test.doubleArrowFunc('hello', 'world');
anon();
arrow();
double();

class Fruit {
  getObjectLiteral() {
    this.stuff = 'fruit';
    return {
      stuff: 'candy',
      method: () => this.stuff,  // Returns 'fruit'
    };
  }
}

const fruit = new Fruit();
console.log(fruit.getObjectLiteral().method()); // fruit
