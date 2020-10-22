
const add = (a, b, c) => {
  a + b + c;
  console.log(add.length); // 3
  console.log(add.toString()); // prints the function body (even its comments)
}

add(1, 2, 3);

console.log(add.length); // 3

const mult = (x, y, z) => x * y * z;

const mu = mult.bind(null, 2);

console.log(mu); // [Function: bound mult]
console.log(mu(2, 2)); // 8
