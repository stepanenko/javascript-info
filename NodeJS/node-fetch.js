
const fetch = require('node-fetch');

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
