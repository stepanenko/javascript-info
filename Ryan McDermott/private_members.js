
// Make objects have private members
// This can be accomplished through closures (for ES5 and below).

// ==== Bad: ====

const Employee = function (name) {
  this.name = name;
};

Employee.prototype.getName = function getName() {
  return this.name;
};

const employee = new Employee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined


// ==== Good: ====

function makeEmployee(name) {
  return {
    getName() {
      return name;
    }
  };
}

const employee2 = makeEmployee("John Doe");
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe

// More at: https://github.com/ryanmcdermott/clean-code-javascript
