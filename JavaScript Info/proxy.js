
const numbers = ['a', 'b', 'c'];

const proxy = new Proxy(numbers, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    } else {
      return 'no such letter';
    }
  }
});

console.log(proxy[4]);   // no such letter
console.log(proxy[1]);   // b



// Continue at https://javascript.info/proxy