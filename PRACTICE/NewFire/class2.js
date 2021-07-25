
// Binding this with prototype and static methods

// When a static or prototype method is called without a value for this,
// such as by assigning the method to a variable and then calling it,
// the this value will be undefined inside the method

class Animal {
    speak() {
        return this;
    }
    static eat() {
        return this;
    }
}

let obj = new Animal();
obj.speak(); // the Animal object
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined
