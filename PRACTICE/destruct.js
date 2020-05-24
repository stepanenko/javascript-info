
const obj = { name: 'John', age: 34 };

function getAge({age}) {
  console.log(age);
}

getAge(obj);   // 34

const fruitPrices = {
  apples: {
    green: 4,
    red: 2
  }
}

const { apples: { red } } = fruitPrices;
console.log(red);   // 2