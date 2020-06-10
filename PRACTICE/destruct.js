
const client = {
  name: 'John',
  age: 34
};

function getAge({ age }) {
  console.log(age);
}
getAge(client);   // 34

const newFruits = {
  bananas: { small: 5, big: 7},
  oranges: 3
};
const fruitPrices = {
  id: 1,
  ...newFruits,   // on right side from '=' --> spread operator !! 
  apples: {
    green: 4,
    red: 2
  }
};

const { apples: { red } } = fruitPrices;
console.log(red);   // 2

const { id, ...fruitsWithoutId } = fruitPrices;   // on left side from '=' --> rest operator !!
console.log(id);   // 1
console.log(fruitsWithoutId);   // { bananas: { small: 5, big: 7 }, oranges: 3, apples: { green: 4, red: 2 } } 
