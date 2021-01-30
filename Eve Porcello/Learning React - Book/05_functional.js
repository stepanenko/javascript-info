
// page 45, chapter 3

// Functional techniques are being used more and more in JS projects, particularly React projects.

// JavaScript supports functional programming because JavaScript functions are firstclass citizens.
// This means that functions can do the same things that variables can do.

// Functional programmers write a lot of small functions, and the arrow function syntax makes that much easier.

// Since functions are variables, we can add them to objects:

const obj = {
  message: "They can be added to objects like variables",
  log(message) {
    console.log(message);
  }
};

obj.log(obj.message); // They can be added to objects like variables


// We can also add functions to arrays in JavaScript:

const messages = [
  "They can be inserted into arrays",
  message => console.log(message),
  "like variables",
  function (message) { console.log(message); }
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables


// If you see more than one arrow used during a function declaration, this means that you’re using a higher-order function:

const createScream = logger => message => {
  logger(message.toUpperCase() + "!!!");
};

// We can say that JavaScript supports functional programming because its functions
// are first-class citizens. This means that functions are data. They can be saved,
// retrieved, or flow through your applications just like variables.
