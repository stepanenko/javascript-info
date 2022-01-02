
// ======= GETTERS and SETTERS ========
const me = {
  name: "Serg",
  surname: 'Stepanenko',
  age: 28,

  get fullname() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

me.fullName = "Viktor Steps";
console.log(me.fullname);

//\\//\\//\\//\\//\\//\\
let firstname = 'John';
let lastname = 'Wick';

[firstname, lastname] = ['Bob', 'Kennet'];

console.log(firstname, lastname);
