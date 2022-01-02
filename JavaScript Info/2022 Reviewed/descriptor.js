
const user = {
    name: "Serg",
    age: 28
  };
  
  let descr = Object.getOwnPropertyDescriptor(Math, 'PI');
  console.log(descr);
  
  Object.defineProperty(user, 'name', {
    value: 'Viktor',
    writable: false
  });
  user.name = "Sergio";   //  won't work, and will be ignored by JS
  console.log(user);
  