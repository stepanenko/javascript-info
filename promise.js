
// Resolved Promise:
const promise1 = new Promise((resolve, reject) => {
  setTimeout(
    () => resolve('done')
  , 1000)
});
console.log('promise1:', promise1);   // promise1: Promise { <pending> }

let result;
const status = promise1.then(function(data) {
  result = data;
  console.log('Inside then:', result);   // Inside then: done
  return data;
});

console.log(status);   // Promise { <pending> }
console.log('Outside then:', result);   // Outside then: undefined

// Rejected Promise:
const promise2 = new Promise((res, rej) => {
  // res('1');
  rej(new Error('Value not found'));
});

promise2.then(console.log, (error) => console.log('Error occured.', error.message));

// ====== FROM ARTICLE ====== http://bit.ly/js_promise =====

const myPromise = new Promise((resolve, reject) => {
  if (Math.random() * 100 <= 90) {
      resolve('Hello, Promises!');
  }
  reject(new Error('In 10% of the cases, I fail. Miserably.'));
});

// Two functions 
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);

// Same as above, written concisely
// myPromise.then((resolvedValue) => {
//     console.log(resolvedValue);
// }, (error) => {
//     console.log(error);
// });



function prom() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve('Success');
     }, 2000);
  });
}

const res = prom().then(data => {
  console.log(data);
});

const delay = (ms) => new Promise(
  (resolve) => setTimeout(resolve('Delayed'), ms)
);

delay(4000).then(console.log);
