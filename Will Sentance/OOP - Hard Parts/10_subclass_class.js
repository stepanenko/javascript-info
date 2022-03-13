
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score= score;
  }

  increment() {
    this.score++;
  }
}

const sara = new UserCreator('Sara', 14);
sara.increment();
// console.log(sara);

class PaidUserCreator extends UserCreator {
  constructor(paidName, paidScore, balance) {
    super(paidName, paidScore);
    this.balance = balance;
  }

  increaseBalance(addBalance) {
    this.balance += addBalance;
  }
}

const tom = new PaidUserCreator('Tom', 9, 110);
tom.increaseBalance(40);
tom.increment();
console.log(tom);
