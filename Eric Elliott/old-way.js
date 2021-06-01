
function Greet(name) {
  this.name = name || 'John Doe'; 
}

Greet.prototype.hello = function hello() {
  return `Hello, im ${this.name}`
}

const bill = new Greet('Bill');
console.log(bill.hello())

console.log(bill);
