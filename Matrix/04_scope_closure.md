# Scope and Closure

**Scope** defines where variables and functions are accessible in your code.  
JavaScript has **global**, **function**, and **block scope** (introduced with `let` and `const`).  

### Definition 1:  
**Closure** is a feature where an inner function remembers the variables in its outer function’s scope, even after the outer function has finished executing. When a function is returned or passed around, it retains access to the variables of the scope in which it was created.

### Definition 2:  
**Closure** is a feature where a function retains access to its lexical scope (the surrounding state) even when the function is executed outside that scope. This means that the function "remembers" the environment in which it was created.

While returning a function is a common way to create a closure, passing a function around (e.g., as a callback or assigning it to another variable) also creates closures. In both cases, the function retains access to the variables from its original scope.

### Example 1: Returning a Function (Common Closure Scenario)
```js
function createGreeting(name) {
  return function() {
    console.log(`Hello, ${name}!`);
  };
}
const greetBob = createGreeting("Bob");
greetBob(); // Output: Hello, Bob!
// Even after createGreeting has finished executing, greetAlice can access name.
```

---
**Closures** don't require a function to be returned specifically. A **closure** is created as soon as an inner function accesses a variable from its outer scope, even if that inner function is simply passed around.

### Example 2: Passing a Function as a Callback (Not Returning)
```js
function setupListener() {
  const message = "Hello from closure!";

  // The function passed to setTimeout forms a closure over `message`
  setTimeout(function() {
    console.log(message);  // The inner function accesses `message` from `setupListener`'s scope
  }, 1000);
}
setupListener(); // After 1 second, logs: "Hello from closure!"
```
This is a closure because `setTimeout`'s function keeps a reference to the scope of `setupListener` even after `setupListener` has finished executing.

---
### Example 3: Event Handler Closure (Function Passed, Not Returned)
```js
function createButton() {
  const buttonText = "Click me!";

  document.getElementById("myButton").addEventListener("click", function() {
    console.log(buttonText);  // This function accesses `buttonText` from `createButton`'s scope
  });
}
createButton(); // logs: "Click me!"
```
The function passed to `addEventListener` forms a closure over `buttonText`. Even though the function isn't returned, it still retains access to `buttonText` whenever the button is clicked.

---
### Example 4: Assigning a Function to a Variable (Closure Without Returning)
```js
function outerFunction() {
  const outerVar = "I am still here!";
  const innerFunction = function() { // innerFunction closes over outerVar
    console.log(outerVar);
  };

  someGlobalVariable = innerFunction; // Assigns innerFunction to a global variable
}

let someGlobalVariable;
outerFunction();

someGlobalVariable(); // Logs: "I am still here!"
```
When `innerFunction` is assigned to the global variable `someGlobalVariable`, it still retains access to `outerVar` through closure, even though it wasn’t returned directly from `outerFunction`.
