// Singletons are classes that can be instantiated once and can be accessed globally.
// This single instance can be shared throughout our application,
// which makes Singletons great for managing global state in an application.

let instance;
let counter = 0;

class Counter {
  constructor () {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;
  }
    
  getInstance() {
    return this;
  ｝
    
  getCount() i
    return counter;
  ｝
    
  increment() {
    return ++counter;
  }
    
  decrement() {
    return --counter;
  ｝
}
  
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;

// The Object.freeze method makes sure that consuming code cannot modify the Singleton.
// Properties on the frozen instance cannot be added or modified,
// which reduces the risk of accidentally overwriting the values on the Singleton.

// However, the class implementation shown in the examples above is actually overkill.
// Since we can directly create objects in JavaScript, we can simply use a regular object to achieve the same result:

let count = 0;
    
const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  },
};
  
Object.freeze(counter);
export { counter };

// Since objects are passed by reference, all the files importing singletonCounter
// will get a reference to the same singleton Counter object.
// Modifying the value of count in any of these files will modify the value on the singletonCounter.
