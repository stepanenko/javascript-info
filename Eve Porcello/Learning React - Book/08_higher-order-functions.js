
// page 61

// Higher-order functions are functions that can manipulate other functions.
// They can take functions in as arguments or return functions or both.

// The first category of higher-order functions are functions that expect other functions as arguments:
// e.g.: Array.map, Array.filter or Array.reduce

// Example:

const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log("Welcome!!!");

const showUnauthorized = () => console.log("Unauthorized!!!");

invokeIf(true, showWelcome, showUnauthorized); // "Welcome!!!"
invokeIf(false, showWelcome, showUnauthorized); // "Unauthorized!!!"
