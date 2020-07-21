
let animal = {
  eats: true,
  walk() {
    console.log('Animal walks')
  }
};

let rabbit = {
  runs: true,
  __proto__: animal
};

let longEar = {
  earlenght: 100,
  __proto__: rabbit
};

//console.log(rabbit) // {runs: true}
//console.log(rabbit.runs) // true
//console.log(rabbit.eats) // true
//rabbit.walk() //Animal walks
//longEar.walk() //Animal walks\
//console.log(longEar.runs) // true
//console.log(longEar.eats) // true

// The prototype is only used for reading properties.

let user = {
  name: "John",
  surname: 'Doe',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(val) {
    [this.name, this.surname] = val.split(' ');
  }
};

let admin = {
  isAdmin: true,
  __proto__: user
};

// console.log(admin.fullName)   // John Doe
admin.fullName = 'Vik Steps';
// console.log(admin.fullName)   // Vik Steps
// console.log(admin.isAdmin)   // true

// console.log(admin.__proto__)   //{name: "John", surname: "Doe"}
// console.log(admin.__proto__ == user)   // true


// === TASKS ====
// What will be in console ?
let anim = {
  jumps: null
};

let rabb = {
  __proto__: anim,
  jumps: true
};

console.log(rabb.jumps); // ? (1)
delete rabb.jumps;
console.log(rabb.jumps); // ? (2)
delete anim.jumps;
console.log(rabb.jumps); // ? (3)