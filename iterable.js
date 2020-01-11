// https://javascript.info/iterable

let obj = {
  from: 1,
  to: 5
}

// The iterator object is separate from the object it iterates over:
obj[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,

    next() {
      if (this.current <= this.last) {
        return { done: false, value: this.current++ }
      } else {
        return { done: true }
      }
    }
  }
}

for(let n of obj) {
  // console.log(n);
}


// We may also use obj itself as the iterator to make the code simpler:
let obj2 = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ }
    } else {
      return { done: true }
    }
  }
}

for(let n of obj2) {
  console.log(n);
}
