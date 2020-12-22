
// Create a function that takes an array of objects (groceries)
// which calculates the total price and returns it as a number.

// My solution 1:
function getTotalPrice(groceries) {
  return groceries.reduce((acc, el) => Number((acc + el.quantity * el.price).toFixed(2)), 0);
  // return Number(groceries.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)); 
}

// My sol 2:
function getTotalPrice2(groceries) {
  let total = 0;

  groceries.forEach(el => {
    total += el.quantity * el.price;
  });

  return parseFloat(total.toFixed(2));
}



console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Cereals", quantity: 1, price: 2.50 }
]));   // => 4

console.log(getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.50 },
  { product: "Eggs", quantity: 12, price: 0.10 },
  { product: "Bread", quantity: 2, price: 1.60 },
  { product: "Cheese", quantity: 1, price: 4.50 }
]));   // => 10.4

console.log(getTotalPrice([
  { product: "Chocolate", quantity: 1, price: 0.10 },
  { product: "Lollipop", quantity: 1, price: 0.20 }
]));   // => 0.3
