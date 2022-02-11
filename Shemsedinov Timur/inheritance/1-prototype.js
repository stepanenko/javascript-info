'use strict';

function Rect(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
};

function Square(x, y, side) {
  Rect.call(this, x, y, side, side);
}

Object.setPrototypeOf(Square.prototype, Rect.prototype);

// Old way

// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

// Square.prototype = new Rect();
// Square.prototype.constructor = Square;

// For node.js
// util.inherits(Square, Rect);

// Usage

const p1 = new Square(10, 20, 50);
console.dir(Square.prototype);
console.dir(p1.prototype);
console.dir(p1.constructor === Square);
console.dir(p1.__proto__ === Square.prototype);
console.log(p1.toString());

// Result

// Rect {}
// undefined
// true
// true
// [10, 20, 50, 50]