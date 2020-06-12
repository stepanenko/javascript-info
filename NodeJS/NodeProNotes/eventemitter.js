
// Require events to start using them
const EventEmitter = require('events').EventEmitter; // Dogs have events to publish, or emit

class Dog extends EventEmitter { };
class Food { };
let myDog = new Dog();
// When myDog is chewing, run the following function
myDog.on('chew', (item) => {
  if (item instanceof Food) {
    console.log('Good dog');
  } else {
    console.log(`Time to buy another ${item}`);
  }
});
myDog.emit('chew', 'shoe'); // Will result in console.log('Time to buy another shoe')
const bacon = new Food();
myDog.emit('chew', bacon); // Will result in console.log('Good dog')

// In the above example, the dog is the publisher / EventEmitter, while the function
// that checks the item was the subscriber / listener.You can make more listeners too:
// There can also be multiple listeners for a single event, and even remove listeners:
// If you want to listen to a event only once, you can use:
myDog.once('chew', pet);

// Which will remove the listener automatically without race conditions