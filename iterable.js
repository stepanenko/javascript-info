// https://javascript.info/iterable

let obj = {
  from: 0,
  to: 5
}

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
  console.log(n);
}

// The iterator object is separate from the object it iterates over.
