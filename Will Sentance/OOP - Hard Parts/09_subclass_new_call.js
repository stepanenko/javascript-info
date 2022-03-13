
function userCreator(name, score) {
  this.name = name;
  this.score = score;
}

userCreator.prototype.increment = function() {
  this.score++;
}

const terry = new userCreator('Terry', 2);
terry.increment();
// console.log(terry);

function paidUserCreator(paidName, paidScore, balance) {
  userCreator.call(this, paidName, paidScore);
  this.balance = balance;
}

paidUserCreator.prototype = Object.create(userCreator.prototype);
paidUserCreator.prototype.increaseBalance = function(addBalance) {
  this.balance += addBalance;
}
// === my version :) ===
// paidUserCreator.prototype = {
//   increment: userCreator.prototype.increment,
//   increaseBalance: function(addBalance) {
//   this.balance += addBalance;
//   }
// }

const bill = new paidUserCreator('Bill', 5, 60);
bill.increment();
bill.increaseBalance(30);
console.log(bill);
