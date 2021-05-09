
// Functions create new lexical scopes. This is very much true for this keyword too. 
// When you use the function keyword, new lexical environment (with its own this and arguments object).
// Arrow functions are exempt from this rule, though. Since arrow function was
// initially designed to be lightweight, it's just right that it doesn't need their own
// lexical scope (i.e. can borrow from its parents).

const mark = {
  name: 'Mark',
  friends: [{ name: 'Eduardo' }, { name: 'Dustin' }],
  listFriends: function () {
    this.friends.forEach(function (friend) {
      // ----- FIX ME -----
      // If I uncomment the below,
      // the compiler will say that this is undefined:
      // this.greetFriend(friend.name);
    });
  },
  greetFriend: function (name) {
    console.log('Hi ' + name + "!");
  }
};

// I want the below to work:
mark.listFriends();

// Solution with 'self = this'
const pit = {
  name: 'Pit',
  friends: [{ name: 'Jim' }, { name: 'Alice' }],
  listFriends: function () {
    let self = this;
    this.friends.forEach(function (friend) {
      self.greetFriend(friend.name);
    });
  },
  greetFriend: function (name) {
    console.log('Hi ' + name + "!");
  }
};
pit.listFriends();

// Solution with Arrow fn, since it uses parent's lexical scope
const bill = {
  name: 'Bill',
  friends: [{ name: 'Harry' }, { name: 'Jane' }],
  listFriends: function () {
    this.friends.forEach((friend) => {
      this.greetFriend(friend.name);
    });
  },
  greetFriend: function (name) {
    console.log('Hi ' + name + "!");
  }
};
bill.listFriends();


// Solution with Bind:
const viktor = {
  name: 'Viktor',
  friends: [{ name: 'Jack' }, { name: 'Sarah' }],
  listFriends: function () {
    const greetFr = this.greetFriend.bind(this);
    this.friends.forEach(function (friend) {
      greetFr(friend.name);
    });
  },
  greetFriend: function (name) {
    console.log('Hi ' + name + "!");
  }
};
viktor.listFriends();
