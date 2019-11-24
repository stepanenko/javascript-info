
let prom2 = new Promise((res, rej) => {
  setTimeout(
    () => res('done')
  , 1000)
});

prom2.then(console.log);

let promise = new Promise((res, rej) => {
  // res('1');
  rej('not found');
});

promise.then(console.log, (e) => console.log('thats error: ' + e));

