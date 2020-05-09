
let obj = {
  age: 30,
  2: 'two'
};

let numProp = 5;
obj[1] = 'one';
obj[numProp] = 'five';

console.log(obj);   // { '1': 'one', '2': 'two', '5': 'five', age: 30 }

console.log(typeof obj[1]);   // string
console.log(typeof obj[2]);   // string


// https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373