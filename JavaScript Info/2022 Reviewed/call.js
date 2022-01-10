
// ======= CALL =======
const person = {
  firstName: "Igor",
  surName: "Petrenko",
  middle: 'Andriiovych'
};

function getFullName(a, b) {
  console.log(`That is ${this[a]} ${this[b]}`)
}
getFullName.call(person); // will print 'That is undefined undefined'
getFullName.call(person, 'firstName', 'surName');
getFullName.call(person, 'firstName', 'middle');

// ==== Method borrowing =====
function getArgs() {
  // copying array's built-in method 'join' into arguments and naming it 'iJoin':
  arguments.iJoin = [].join;
  // calling just copied join in the context of 'arguments':
  const args = arguments.iJoin(' : ');
  console.log(args);
}

getArgs(1, 4, 7, 'fuck', true);

// ====== How 'join' looks inside =======
// function myJoin(separator) {
//   if (!this.length) return '';
//   let str = this[0];
//   for (let i=1; i<this.length; i++) {
//     str = str + separator + this[i];
//   }
//   return str;
// }

// As 'this' even an object will do:

const user = {
  0: 'Chris',
  1: 'Nicholson',
  2: 57,
  length: 3
};

user.myjoin = [].join;

console.log(user.myjoin(' - ')); // prints 'Chris - Nicholson - 57'

// Copying [].join, as above, is not safe and recommended
// safely calling the join can be done with 'call':
function logArgs() {
  const newJoin = [].join;
  const args = newJoin.call(arguments, '/');
  console.log(args);
}

logArgs(2, -6, 'shit', false); // prints '2/-6/shit/false'
// We called join without copying - clear and safe
