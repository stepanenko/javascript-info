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

// Old way 1

// Square.prototype = Object.create(Rect.prototype);
// Square.prototype.constructor = Square;

// Old way 2

// Square.prototype = new Rect();
// Square.prototype.constructor = Square;

// For node.js
// util.inherits(Square, Rect);

// Usage

const p1 = new Square(10, 20, 50);
console.dir(Square.prototype);
console.log(p1.prototype);
console.log(p1.constructor === Square);
console.log(p1.__proto__ === Square.prototype);
console.log(p1.toString());

// Result

// Rect {}
// undefined
// true
// true
// [10, 20, 50, 50]