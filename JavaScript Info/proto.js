
// The prototype chain can be longer:
let animal = {
  eats: true,
  walk() {
    console.log('Animal walks');
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
// Will get an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.

// console.log(rabbit) // { runs: true }
// console.log(rabbit.eats) // true
// longEar.walk() // Animal walks
// console.log(longEar.runs) // true
// console.log(longEar.eats) // true


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
admin.fullName = 'Vik Steps';   // setter triggers!
// console.log(admin.fullName)   // Vik Steps <- state of admin modified
// console.log(admin.isAdmin)   // true

// console.log(user.fullName)   // John Doe <- state of user protected


// === TASKS ====
// What will be in console ?
let anim = {
  jumps: null
};
let rabb = {
  __proto__: anim,
  jumps: true
};
console.log('task', rabb.jumps); // ? (1)
delete rabb.jumps;
console.log('task', rabb.jumps); // ? (2)
delete anim.jumps;
console.log('task', rabb.jumps); // ? (3)


/// https://javascript.info/prototype-inheritance