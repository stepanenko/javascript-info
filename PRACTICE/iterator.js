
// We want this: range(0, 5) -> 1, 2, 3, 4, 5

function range(start, end, step = 1) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (start < end) {
        start += step;
        return { value: start, done: false }; // returns 1, 2, 3, 4, 5
        // return { value: start - step, done: false }; // returns 0, 1, 2, 3, 4
      }
      return { value: end, done: true };
    }
  }
}

for (let n of range(0, 5)) {
  console.log(n);
}

