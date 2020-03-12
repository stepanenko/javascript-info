
function split(input, charToSplit) {
  charToSplit = charToSplit || ' ';
  return input.split(charToSplit);
}

var input = 'asd|asd';
var splited = split(input, '|');

console.log(splited); // [ 'asd', 'asd' ]
