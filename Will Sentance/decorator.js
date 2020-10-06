
function oncify(fn) {
  let counter = 0;
  function oncified(input) {
    if (counter === 0) {
      counter++;
      return fn(input);
    }
    return 'Sorry';
  }
  return oncified;
}

function add3(value) {
  return value + 3;
}

const oncifiedAdd3 = oncify(add3);

let res1 = oncifiedAdd3(5);
let res2 = oncifiedAdd3(6);
console.log('res1', res1); // 8
console.log('res2', res2); // Sorry
