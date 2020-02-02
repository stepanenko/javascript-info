

// First-class functions - can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// Assigning anonymous function to a variable:
let f = function() {
  console.log('Shelby');
}
f();

// Pass a function as an Argument:
function sayHello() {
  return 'Hello';
}

function greeting(greet, name) {
  console.log(greet(), name);
}
// The function that we pass as an argument to another function, is called a Callback function. sayHello is a Callback function.
greeting(sayHello, 'Peter');


// Return a function:
// A function that returns a function is called a Higher-Order Function.
function welcome() {
  return function() {
    console.log('Hi, welcome home!');
  }
}
// One way to call it:
welcome()();
// Another way:
const wel = welcome();
wel();



// Continue learning at:
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
