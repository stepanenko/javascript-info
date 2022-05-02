
# Thoughts from Ryan McDermott

Software engineer at Google

Website: https://ryanmcdermott.me/


## Functions

## Function arguments (2 or fewer ideally)

One or two arguments is the ideal case, and three should be avoided if possible.
Usually, if you have more than two arguments then your function is trying to do too much.
Since JavaScript allows you to make objects on the fly, without a lot of class boilerplate,
you can use an object if you are finding yourself needing a lot of arguments.

To make it obvious what properties the function expects, you can use the ES2015/ES6 destructuring syntax. This has a few advantages:

- It's immediately clear what properties are being used.
- It can be used to simulate named parameters.
- Destructuring also clones primitive values passed into the function. This prevents side effects (except objects and arrays)
- Linters can warn you about unused properties, which would be impossible without destructuring.

Bad:
```js
function createMenu(title, body, buttonText, cancellable) {
  // ...
}

createMenu("Foo", "Bar", "Baz", true);
```
Good:
```js
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: "Foo",
  body: "Bar",
  buttonText: "Baz",
  cancellable: true
});
```

## Functions should do one thing

This is by far the most important rule in software engineering.
When functions do more than one thing, they are harder to compose, test, and reason about.

Bad:
```js
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```
Good:
```js
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```

## Remove duplicate code
Duplicate code is bad because it means that there's more than one place to alter something if you need to change some logic.

Removing duplicate code means creating an abstraction that can handle this set of different things with just one function/module/class.

Getting the abstraction right is critical. **Bad abstractions can be worse than duplicate code**!

Bad:
```js
function showDeveloperList(developers) {
  developers.forEach(developer => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach(manager => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}
```
Good:
```js
function showEmployeeList(employees) {
  employees.forEach(employee => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience
    };

    switch (employee.type) {
      case "manager":
        data.portfolio = employee.getMBAProjects();
        break;
      case "developer":
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```

## Set default objects with Object.assign

Bad:
```js
const menuConfig = {
  title: null,
  body: "Bar",
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || "Foo";
  config.body = config.body || "Bar";
  config.buttonText = config.buttonText || "Baz";
  config.cancellable =
    config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);
```
Good:
```js
const menuConfig = {
  title: "Order",
  // User did not include 'body' key
  buttonText: "Send",
  cancellable: true
};

function createMenu(config) {
  let finalConfig = Object.assign(
    {
      title: "Foo",
      body: "Bar",
      buttonText: "Baz",
      cancellable: true
    },
    config
  );
  return finalConfig
  // config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);
```

## Don't use flags as function parameters

Flags tell your user that this function does more than one thing.Functions should do one thing.
Split out your functions if they are following different code paths based on a boolean.

Bad:
```js
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
```
Good:
```js
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```

## Avoid Side Effects

A function produces a side effect if it does anything other than take a value in and return another value or values.
A side effect could be writing to a file, modifying some global variable, making a GET or POST request, working with a browser API like window.navigator or document.getElementById(), network I/O, logging to console, writing to localStorage, etc.

Don't have several functions and classes that write to a particular file. Have one service that does it!

Avoid using mutable data types that can be written to by anything, and not centralizing where your side effects occur.

Bad:
```js
// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
let name = "Ryan McDermott";

function splitIntoFirstAndLastName() {
  name = name.split(" ");
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];
```
Good:
```js
function splitIntoFirstAndLastName(name) {
  return name.split(" ");
}

const name = "Ryan McDermott";
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];
```

Objects and arrays are two kinds of mutable values so it's important to handle them carefully when they're passed as parameters to a function.

There are rare cases where you actually want to modify the input object. But most things can be refactored to have no side effects!

Cloning big objects can be very expensive in terms of performance. Luckily, there are [great libraries](https://immutable-js.com/) that are fast and not as memory intensive as it would be for you to manually clone objects and arrays.

Bad:
```js
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};
```
Good:
```js
const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};
```

## Make objects have private members

This can be accomplished through closures (for ES5 and below).
```js
// Bad:
const Employee = function(name) {
  this.name = name;
};

Employee.prototype.getName = function getName() {
  return this.name;
};

const employee = new Employee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined

// Good:
function makeEmployee(name) {
  return {
    getName() {
      return name;
    }
  };
}

const employee = makeEmployee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
```

## Prefer ES2015/ES6 classes over ES5 plain functions

It's very difficult to get readable class inheritance, construction, and method definitions for classical ES5 classes. If you need inheritance (and be aware that you might not), then prefer ES2015/ES6 classes.

However, prefer small functions over classes until you find yourself needing larger and more complex objects.

## Don't write to global functions
```js
// Bad:
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};

// Good:
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```

## Avoid negative conditionals
```js
// Bad:
function isDOMNodeNotPresent(node) {}

if (!isDOMNodeNotPresent(node)) {}

// Good:
function isDOMNodePresent(node) {}

if (isDOMNodePresent(node)) {}
```

### Avoid conditionals

First hearing this people say, "how am I supposed to do anything without an if statement?" The answer is that you can use polymorphism to achieve the same task in many cases. The second question is usually, "well that's great but why would I want to do that?" Function should only do one thing. When you have classes and functions that have if statements, you are telling your user that your function does more than one thing.
```js
// Bad:
class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case "777":
        return this.getMaxAltitude() - this.getPassengerCount();
      case "Air Force One":
        return this.getMaxAltitude();
      case "Cessna":
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}

// Good:
class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```
