
// Factory Function:
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log('draw');
    }
  }
}
const circle = createCircle(3);
console.log(circle);   // { radius: 5, draw: [Function] }


// Constructor Function:
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}
const another = new Circle(5);
console.log(another);   // Circle { radius: 5, draw: [Function] }

console.log(another.constructor);   // [Function: Circle]
console.log(circle.constructor);   // [Function: Object]
let x = {};  // let x = new Object()

