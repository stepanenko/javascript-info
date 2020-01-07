
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
}

function say(phrase) {
  alert(`** ${phrase} **`);
}

