
function multiplyBy2(num) {
  return num*2;
}

multiplyBy2.toString(); // function multiplyBy2(num) {return num*2;}
let n = multiplyBy2.hasOwnProperty('num');

console.log(n);
