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

// Currying is a functional technique that involves the use of higher-order functions.
// The following is an example of currying:

const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);

const log = userLogs("grandpa23");

log("attempted to load 6 fake members");

const getFakeMembers = () => Promise.resolve([1, 2, 3, 4, 5, 6]);

getFakeMembers().then(
  (members) => log(`successfully loaded ${members.length} members`),
  (error) => log("encountered an error loading members")
);
// grandpa23 -> attempted to load 20 fake members
// grandpa23 -> successfully loaded 6 members

// The log function is produced from userLogs, and every time
// the log function is used, “grandpa23” is prepended to the message.
