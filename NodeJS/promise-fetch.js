
const fetch = require('node-fetch');
let todos = require('./todos.json');


let done = true;
const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = todos.filter(todo => todo.completed);
    resolve(workDone);
  } else {
    const why = 'Still working on something else...';
    reject(why);
  }
});

const checkIfItsDone = () => {
  isItDoneYet
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });
}

checkIfItsDone();

// ____ Promisifying ____
// ...is a way to be able to use a classic JavaScript function that takes a callback, and have it return a promise:
const fs = require('fs');

const getFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);  // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return;        // and we don't want to go any further
      }
      resolve(data);
    });
  });
}

getFile('/etc/passwd')
  .then(data => console.log(data))
  .catch(err => console.error(err));


// ___ Chaining Promises ____
// The Fetch API is a promise-based mechanism, and calling fetch() is
// equivalent to defining our own promise using new Promise().
const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5';

const status = response => {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
}

const json = response => response.json();

fetch(url)
  .then(status)    // note that the status function is called here, and it returns a promise
  .then(json)      // json function here returns a promise that resolves with 'data'
  .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
    console.log('Request succeeded with JSON response', data);
  })
  .catch(error => {
    console.log('Request failed', error);
  });

  // ___ Using Async/Await ___
  const getOne = async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  
  getOne(url.slice(0, -1) + '1');
