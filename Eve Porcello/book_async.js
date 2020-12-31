
// page 38

fetch("https://api.randomuser.me/?nat=US&results=1")
  .then(res => res.json())
  .then(json => json.results)
  .then(console.log)
  .catch(console.error);

// Exact same with async/await:

const getFakePerson = async () => {
  try {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1");
    let { results } = res.json();
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

getFakePerson();
// Instead of waiting for the results of a promise to resolve and handling it with a chain of then functions,
// async functions can be told to wait for the promise to resolve before further executing any code found in the function.
