
// Bad
someBoolean && (someStatement = 10);

// Good
if (someBoolean) {
  someStatement = 10;
}
// or
if (someBoolean) someStatement = 10;


// Bad
var a = 1,
b = 2;

b = (a++, 10);

// Good
var a = 1;
var b = 2;
a++;
b = 10;

// Bad
number = !!number;

// Good
number = Boolean(number); // converts a truthy or falsy value to true or false

// Bad
getUserInfo();
getClientData();
getCustomerRecord();

// Good
getUser();

// Bad
setTimeout(blastOff, 86400000);

// Good
// Declare them as capitalized named constants.
const MILLISECONDS_IN_A_DAY = 86_400_000;  // accepts as 86400000
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

// Bad 
locations.forEach(l => l + '...');

// Good
locations.forEach(location => location + '...');

// Bad 
let Car = {
  carMake: "Honda",
  carModel: "Accord",
  carColor: "Blue"
};

// Good
let Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};

// Bad
function createUser(name) {
  const userName = name || "Jerome";
  // ...
}

// Good
function createUser(name = "Jerome") {
  // ...
}

// !!! The most important rule in software engineering: !!!
// When functions do more than one thing, they are harder to compose, test, and reason about:
// Bad 
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}

// Good
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}

// Split out your functions if they are following different code paths based on a boolean
// Bad
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}

// Good
function createFile(name) {
  fs.create(name);
}
function createTempFile(name) {
  createFile(`./temp/${name}`);
}

// https://github.com/ryanmcdermott/clean-code-javascript