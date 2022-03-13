
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function() {
  this.score++;
}

const bill = new UserCreator('Bill', 3);
bill.increment();

console.log(bill);
