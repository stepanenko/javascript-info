
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  increment() {
    this.score++;
  }
}

const henry = new UserCreator('Henry', 11);
henry.increment();

console.log(henry);
