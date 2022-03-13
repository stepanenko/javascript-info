
// -=== Functions are both: objects and functions ===-

function mul(num1, num2) {
  return num1 * num2;
}

const result = mul(3, 4);

mul.stored = 34; // 34 will be stored inside the function

mul.prototype.string = 'text' // will be stored inside functions default property -> prototype

console.log(mul.prototype.string); // text
