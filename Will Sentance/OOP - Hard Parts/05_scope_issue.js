
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  // function add1() {
  //   this.score++; // will refer to global window object
  // }
  const add1 = () => {
    this.score++; // will work fine
  }

  add1();
}

const will = new UserCreator('Will', 6);

will.increment();
console.log(will);
