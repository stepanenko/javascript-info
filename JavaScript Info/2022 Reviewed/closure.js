
let n = 'Sergio';

function sayHi(name) {
  console.log('Hi', name);
  console.log('n =', n);
}

n = 'Peter';

sayHi(n); // ?


let surname = 'Daniels';

function makeWorker() {
  const name = 'Jack';
  return function () {
    console.log(name, surname);
  };
}

const name = 'Tom';
surname = 'Reacher';

const worker = makeWorker();

worker(); // ?

// A variable is a property of a special internal object, associated with the currently executing block/function/script.
// Working with variables is actually working with the properties of that object.


function random() {
  let r = Math.random();

  return function fun() {
    console.log(r);
  }
}

let f1 = random();
let f2 = random();
let f3 = random();

f1();
f2();
f3();
// ?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

const counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

// https://javascript.info/closure
