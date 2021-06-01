
const proto = {
  hello: function() {
    return 'Hello, im ' + this.name;
  }
}

let bill = Object.create(proto);
bill.name = 'Bill';

console.log(bill.hello());
console.log(bill);
