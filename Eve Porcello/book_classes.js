
function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function() {
  console.log(this.destination + " | " + this.length + " days");
};

const maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7 days

// Functions are objects, and inheritance is handled through the prototype.
// Classes provide a syntactic sugar on top of that gnarly prototype syntax:

class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }
  
  print() {
    console.log(`${this.destination} will take ${this.length} days.`);
  }
}

const trip = new Vacation("Santiago, Chile", 7);
trip.print(); // Chile will take 7 days.

// Classes can also be extended. When a class is extended, the subclass inherits the properties and methods of the superclass:
// You can use Vacation as an abstract class to create different types of vacations.
// For instance, an Expedition can extend the Vacation class to include gear:

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }
  
  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

// That’s simple inheritance: the subclass inherits the properties of the superclass.
// By calling the print method of Vacation, we can append some new content onto what is printed in the print method of Expedition.

const trip = new Expedition("Mt. Whitney", 3, ["sunglasses", "prayer flags", "camera"]);
trip.print();

// Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera
