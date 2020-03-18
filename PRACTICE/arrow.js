
const test = {
  name: 'arrow test',
  createAnonFunc: function() {
    return function() {
      console.log(this.name);
      console.log(arguments);
    }
  },
  createArrowFunc: function() {
    return () => {
      console.log(this.name);
      console.log(arguments);
    }
  }
}

const func = test.createAnonFunc('hello', 'world');
const arrow = test.createArrowFunc('hello', 'world');

func();
// undefined
// [Arguments] {}

arrow();
// arrow test
// [Arguments] { '0': 'hello', '1': 'world' }
