
// Else-If:
function getTranslation(rhyme) {
  if (rhyme.toLowerCase() === "apples and pears") {
    return "Stairs";
  } else if (rhyme.toLowerCase() === "hampstead heath") {
    return "Teeth";
  } else if (rhyme.toLowerCase() === "loaf of bread") {
    return "Head";
  } else if (rhyme.toLowerCase() === "pork pies") {
    return "Lies";
  } else if (rhyme.toLowerCase() === "whistle and flute") {
    return "Suit";
  }

  return "Rhyme not found";
}

// Switch:
function getTranslation(rhyme) {
  switch (rhyme.toLowerCase()) {
    case "apples and pears":
      return "Stairs";
    case "hampstead heath":
      return "Teeth";
    case "loaf of bread":
      return "Head";
    case "pork pies":
      return "Lies";
    case "whistle and flute":
      return "Suit";
    default:
      return "Rhyme not found";
  }
}

// NICE alternative with Object Literal:
function getTranslationMap(rhyme) {
  const rhymes = {
    "apples and pears": "Stairs",
    "hampstead heath": "Teeth",
    "loaf of bread": "Head",
    "pork pies": "Lies",
    "whistle and flute": "Suit",
  };

  return rhymes[rhyme.toLowerCase()] ?? "Rhyme not found";
}
// If rhymes[rhyme.toLowercase()] is null or undefined (but not false or 0 ),
// then the default string “Rhyme not found” is returned. This is important because
// we might legitimately want to return false or 0 from our conditional. For example:
function stringToBool(str) {
  const boolStrings = {
    "true": true,
    "false": false,
  };

  return boolStrings[str] ?? "String is not a boolean value";
}

// You can also pass a function as the value to your object keys and execute the response:
function calculate(num1, num2, action) {
  const actions = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
  };

  return actions[action]?.(num1, num2) ?? "Calculation is not recognised";
}
// You can use optional chaining (the ?. in the last line of code) to only execute the response if it is defined.
// Otherwise, fall through to the default return string.

// Source: https://betterprogramming.pub/dont-use-if-else-and-switch-in-javascript-use-object-literals-c54578566ba0
