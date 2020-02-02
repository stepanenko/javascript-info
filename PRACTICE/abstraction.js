
// Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.

class ImplementAbstraction {
  set (x, y) {
    this.a = x;
    this.b = y;
  }

  display() {
    console.log('a =', this.a);
    console.log('b =', this.b);
  }
}

const abs = new ImplementAbstraction();

abs.set(5, 10);
abs.display();   // 5, 10 
