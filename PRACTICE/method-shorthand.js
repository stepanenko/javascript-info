
function Obj() {
  return {
    stuff: 'candy',
    method() {
      return this.stuff;
    },
  };
}

const ob = {
  stuff: 'rainbow',
  method() {
    return this.stuff;
  }
}

const ob2 = {
  stuff: 'rainbow',
  method: () => {
    return this.stuff;
  }
}

let short = Obj();

console.log(short.method()); // candy
console.log(ob.method()); // rainbow
console.log(ob2.method()); // undefined
