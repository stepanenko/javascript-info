
function userCreator(name, score) {
  const newUser = Object.create(userFunctions);
  newUser.name = name;
  newUser.score = score;

  return newUser;
}

userFunctions = {
  increment: function () {
    this.score++;
  },
  sayHi: function () {
    console.log(this.name + ' is saying hi!');
  }
};

const david = userCreator('David', 3);
david.increment();

console.log(david.__proto__); // { increment: [Function: increment], sayHi: [Function: sayHi] }

function paidUser(paidName, paidScore, balance) {
  const newPaidUser = userCreator(paidName, paidScore);
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  newPaidUser.balance = balance;

  return newPaidUser;
}

paidUserFunctions = {
  increaseBalance: function (value) {
    this.balance += value;
  }
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);

const jack = paidUser('Jack', 11, 120);
jack.increment();
jack.increaseBalance(100);

console.log(jack);
