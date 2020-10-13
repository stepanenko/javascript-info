
const divide = (a, b) => a / b;

const checkZero = func => (...args) => {
  if (args[1] === 0) return 'Division by zero';
  return func(...args);
}

const safeDivide = checkZero(divide);

console.log(safeDivide(3, 5));
