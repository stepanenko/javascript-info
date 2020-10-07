
function multiply(a, b) {
  return a * b;
}

function prefill(fn, prefilledValue) {
  const output = (liveValue) => {
    const res = fn(liveValue, prefilledValue);
    return res;
  }
  return output;
}

const multBy2 = prefill(multiply, 2);

let res = multBy2(6);
console.log(res); // 12

const multByTen = prefill(multiply, 10);
console.log(multByTen(4)); // 40
