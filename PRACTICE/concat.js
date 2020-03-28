
let obj = [{
  name: 'Serg',
  age: 45
},
{
  name: 'Tom',
  age: 34
}];

let newObj = [];

obj.map(el => {
  newObj = newObj.concat({
    name: el.name,
    age: el.age + 5
  });
});

console.log(newObj);
