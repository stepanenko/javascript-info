
const Person = ({ name, age }) => {
  let _name = name;
  let _age = age;

  return {
    getName: () => _name,
    getAge: () => _age,
    setName: newName => _name = newName
  };
}

let me = Person({ name: 'Serhiy', age: 30 });
me.setName('John');
console.log(me.getName());
