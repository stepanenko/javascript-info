'use strict';

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

const equilateral = Category => class extends Category {
  constructor(x, y, side) {
    super(x, y, side, side);
  }
};

const serializable = Category => class extends Category {
  toString() {
    return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
  }
};

const measurable = Category => class extends Category {
  get area() {
    return this.width * this.height;
  }
};

const movable = Category => class extends Category {
  move(x, y) {
    this.x += x;
    this.y += y;
  }
};

const scalable = Category => class extends Category {
  scale(k) {
    const x = this.width * k / 2;
    const y = this.height * k / 2;
    this.width += x;
    this.height += y;
    this.x -= x;
    this.y -= y;
  }
};

// Utils

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// Usage

const Square1 = equilateral(serializable(measurable(movable(scalable(Rect)))));
const toSquare = pipe(equilateral, serializable, measurable, movable, scalable);
const Square2 = toSquare(Rect);

const p1 = new Square1(10, 20, 50);
p1.scale(1.2);
p1.move(10, 7);
console.log(p1.toString());
console.log('Area:', p1.area);

const p2 = new Square2(10, 20, 50);
p2.scale(1.2);
p2.move(-10, 5);
console.log(p2.toString());
console.log('Area:', p2.area);
