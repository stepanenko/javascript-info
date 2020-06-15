
const number1 = '123.45.67';
const number2 = '15hello52';
const number3 = 'hello52';
const number4 = '';
const number5 = true;

console.log('--- parseInt ----');
console.log(parseInt(number1)); // 123
console.log(parseInt(number2)); // 15
console.log(parseInt(number3)); // NaN
console.log(parseInt(number4)); // NaN
console.log(parseInt(number5)); // NaN

console.log('--- parseFloat ----');
console.log(parseFloat(number1)); // 123.45
console.log(parseFloat(number2)); // 15
console.log(parseFloat(number3)); // NaN
console.log(parseFloat(number4)); // NaN
console.log(parseFloat(number5)); // NaN

console.log('--- Number ----');
console.log(Number(number1)); // NaN
console.log(Number(number2)); // NaN
console.log(Number(number3)); // NaN
console.log(Number(number4)); // 0
console.log(Number(number5)); // 1

console.log('--- 1 * ----');
console.log(1 * number1); // NaN
console.log(1 * number2); // NaN
console.log(1 * number3); // NaN
console.log(1 * number4); // 0
console.log(1 * number5); // 1

console.log('--- + ----');
console.log(+number1); // NaN
console.log(+number2); // NaN
console.log(+number3); // NaN
console.log(+number4); // 0
console.log(+number5); // 1

