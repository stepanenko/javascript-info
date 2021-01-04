
// Functional programming is a part of a larger programming paradigm: declarative programming.
// Declarative programming is a style of programming where applications are structured in a way
// that prioritizes describing what should happen over defining how it should happen.

// Imperative example:

const string = "Restaurants in Hanalei";
let urlFriendly = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") urlFriendly += "-";
  else urlFriendly += string[i];
  
  // OR: urlFriendly += string[i] === " " ? "-" : string[i];
  // OR: urlFriendly = urlFriendly.concat(string[i] === " " ? "-" : string[i]);
  // OR: urlFriendly = urlFriendly + (string[i] === " " ? "-" : string[i]);
  // BUT NOT: urlFriendly = urlFriendly + string[i] === " " ? "-" : string[i];
}

console.log(urlFriendly); // "Restaurants-in-Hanalei"

// Just looking at the code above does not tell us much.
// Imperative programs require lots of comments in order to understand what’s going on.

// Now the Declarative approach to the same task:

const string2 = "Restaurants in Hanalei";
const urlFriendly2 = string.replace(/ /g, "-");

console.log(urlFriendly2); // "Restaurants-in-Hanalei"
