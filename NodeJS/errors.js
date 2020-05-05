
new Promise((resolve, reject) => {
  throw new Error('Error 1');
}).catch(err => {
  console.error(err);
});

// or

new Promise((resolve, reject) => {
  reject('Error 2');   // will log only 'Error 3' without error stack trace
}).catch(err => {
  console.error(err);
});

// ______ Cascading errors ______
// If inside the catch() you raise an error,
// you can append a second catch() to handle it, and so on:

new Promise((resolve, reject) => {
  throw new Error('Error 3');
  // won't be logged as the last catch will catch it and log 'Error 4'
})
  .catch(err => {
    throw new Error('Error 4');
  })
  .catch(err => {
    console.error(err);
  });
