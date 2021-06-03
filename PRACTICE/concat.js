
let array = [
  {
    name: 'Serg',
    age: 45
  },
  {
    name: 'Tom',
    age: 34
  }
];

let arr1 = [];

array.forEach(el => {
  arr1 = arr1.concat({
    name: el.name,
    age: el.age + 5
  });
});

console.log(arr1);

const arr2 = array.map(el => ({ ...el, age: el.age + 5 }));

console.log(arr2);
