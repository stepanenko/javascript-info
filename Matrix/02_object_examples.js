// 1. Using Object.create() to Set Prototype and Define Properties:

// Define the prototype object
const person = {
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

// Create a new object using 'person' as the prototype
const employee = Object.create(person, {
  name: { value: "Alice", writable: true, enumerable: true },
  position: { value: "Developer", writable: false, enumerable: true },
  salary: { value: 1200, writable: true, enumerable: false }
});

console.log(employee.greet()); // Output: "Hello, my name is Alice"
console.log(employee.position); // Output: "Developer"

// Checking prototype inheritance
console.log(Object.getPrototypeOf(employee) === person); // true

// writable - false
employee.position = "Manager";
console.log(employee.position); // Output: "Developer" (unchanged)

// enumerable - false
Object.keys(employee); // Output: ['name', 'position']
Object.values(employee); // Output: ['Alice', 'Developer']
for (let key in employee) {
  console.log(key); // Outputs "name" and "position"
}

////////////////////////

// 2. Using Object.assign(target, ...sources) to copy properties from one or more source objects to a target object:

const target = { a: 1, b: 2 };
const source1 = { b: 4, c: 5 };
const source2 = { c: 6, d: 7 };

Object.assign(target, source1, source2);

console.log(target); // Output: { a: 1, b: 4, c: 6, d: 7 }

// Common Use Cases
// a) Cloning an Object
const original = { x: 1, y: 2 };
const clone = Object.assign({}, original);
console.log(clone); // { x: 1, y: 2 }

// b) Merging Objects
const defaults = { color: "blue", size: "M" };
const userPrefs = { size: "L", price: 100 };
const settings = Object.assign({}, defaults, userPrefs);
console.log(settings); // { color: "blue", size: "L", price: 100 }

// Limitations
// - Only Copies Enumerable Own Properties: Properties that are non-enumerable or inherited from the prototype chain are not copied.
// - Not a Deep Clone: Object.assign does not recursively copy nested objects.
// For deep cloning, consider other methods, such as structured cloning (structuredClone), JSON serialization, or using libraries like Lodash.
