
// // let config = {
// //   alert: setInterval(() => {
// //     console.log('Alert!')
// //   }, 1000)
// // }

// // config = null;

// (function () {
//   let max = Number.MAX_VALUE;
//   let values = [max],
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
// console.log(max / 2);
// console.log(Number.MAX_VALUE);

// // console.log(ob1.hasOwnProperty('name'));


// // console.log(obj.hasOwnProperty('name'))
// // console.log('name' in obj);

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


// User.select('name')
// User.find({ name: req.params.name })

// app.get('/hello', function (req, res) {
//   if (req.url === '/') {
//     res.render('html');
//   }
//   res.status(404).send('error 404');
//   // Write something here to implement 404
// });

// app.get('/', (req, res) => {
//   req.params.id == id
// });

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