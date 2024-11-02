# Async exercises

Q1:
```js
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

A1:
```js
Start
End
Promise
Timeout
```

Q2:
```js
const asyncFunc = async () => "asyncFunc";

const promise = new Promise((res) => {
    console.log("promise");
}).then(() => console.log("then"));

console.log("log 1");

queueMicrotask(() => console.log("queueMicrotask"));

Promise.all([asyncFunc(), promise])
  .then(() => console.log("all"));

console.log("log 2");
```
A2:
```js
"promise"
"log 1"
"log 2"
"queueMicrotask"
```

Q3:
- implement using `async/await`
- implement using `Promise`
- add error handling
```js
// url: https://jsonplaceholder.typicode.com/users
// implement fetchAndProcessUsers
fetchAndProcessUsers()
  .then(users => {
    // implement displayUsers
    if (users) displayUsers(users);
  });

// expected output:
// User: Leanne Graham, Email: Sincere@april.biz
// User: Ervin Howell, Email: Shanna@melissa.tv
// ...
```

A3_a solution with `async/await`:
```js
async function fetchAndProcessUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const users = data.map(user => ({
      name: user.name,
      email: user.email
    }));
    return users;
  } catch (error) {
    console.error(`Error fetching users: ${error.message}`);
  }
}

function displayUsers(users) {
  users.forEach(user => {
    console.log(`User: ${user.name}, Email: ${user.email}`);
  });
}
```

A3_b solution with `Promises`:
```js
function fetchAndProcessUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();  // Parse JSON if the response is ok
    })
    .then(data => {
      // Process the data to extract names and emails
      const users = data.map(user => ({
        name: user.name,
        email: user.email
      }));
      return users;  // Return the processed user data
    })
    .catch(error => {
      console.error(`Error fetching users: ${error.message}`);  // Handle errors
    });
}

function displayUsers(users) {
  if (users) {
    users.forEach(user => {
      console.log(`User: ${user.name}, Email: ${user.email}`);
    });
  }
}
```
