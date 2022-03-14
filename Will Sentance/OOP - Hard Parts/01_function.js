// Video 6 Creating Objects with Functions:

function UserCreator(name, score) {
  const newUser = {};

  newUser.name = name;
  newUser.score = score;
  newUser.increment = function () {
    newUser.score++;
  }

  return newUser;
}

const john = UserCreator('John', 5);
john.increment();

console.log(john);
