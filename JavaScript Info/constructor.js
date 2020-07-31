
// If we have many lines of code all about creation of a single complex object,
// we can wrap them in constructor function, like this:

let user = new function() {
  this.name = 'Bill';
  this.isAdmin = true;
  this.getUserName = function() {
    console.log('Name:', this.name);
  }
}

user.getUserName();

// The constructor can’t be called again, because it is not saved anywhere,
// just created and called. So this trick aims to encapsulate the code that
// constructs the single object, without future reuse.