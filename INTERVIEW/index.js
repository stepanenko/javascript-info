
// === Will it work and why? ===
// let config = {
//   alert: setInterval(() => {
//     console.log('Alert!')
//   }, 1000)
// }

// config = null;

// === Why Number.MAX_VALUE isn't an odd neither even value? ===
// (function () {
//   let values = [3, 8, '15', Number.MAX_VALUE, Infinity, -23],
//     oddValues = [],
//     index,
//     lenValues = values.length,
//     isOdd = function (value) {
//       return (value % 2) !== 0;
//     };

//   while (lenValues--) {
//     if (isOdd(values[lenValues])) {
//       oddValues.push(values[lenValues]);
//     }
//   }
//   console.log(oddValues);
// }());

// let max = Number.MAX_VALUE;
// console.log(max / 2); // will work
// console.log(Number.MAX_VALUE + 1); // will not


// === Whats the difference between hasOwnProperty and in? ===
let ob1 = { name: 'Serg' };
console.log(ob1.hasOwnProperty('name'));   // true

let ob2 = { age: 44 };
Object.setPrototypeOf(ob2, ob1);

console.log(ob2.hasOwnProperty('name'));   // false
console.log('name' in ob2);   // true


// === Implement your own map function ===
// let arr = [3, 4, 5];
// arr = arr.map(value => value * value);
// console.log(arr);

// function myMap(arr, cb) {
//   let result = [];

//   for (let i = 0; arr.length < 0; i++) {
//     result.push(cb(i));
//   }

//   return result;
// }

// let output = myMap([1, 2, 3], (val) => {
//   return val * 2;
// });

// console.log(output);

// === Implement Lookup function with Mongo ===
// User.select('name')
// User.find({ name: req.params.name })


// === Implement response with 404 page ===
// app.get('/hello', function (req, res) {
//   if (req.url === '/') {
//     res.render('html');
//   }
//   res.status(404).send('error 404');
//   // Write something here to implement 404
// });


// === What is the difference between arrow and regular function? ===
let value = 5;

let obj = {
  name: 'wer',
  check() {
    console.log(this);

  },
  arrow: () => {
    console.log(this);
  }
}

obj.check();
obj.arrow();
