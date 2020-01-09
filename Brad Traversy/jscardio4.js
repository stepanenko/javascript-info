
// Challenge 4: Capitalize first letters:

function cap(str) {
  let strArr = str.toLowerCase().split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }

  return strArr.join(' ');
}

function cap2(str) {
  let strArr = str.toLowerCase().split(' ');
  let newStr = [];
  for (let w of strArr) {
    newStr.push(w[0].toUpperCase() + w.slice(1));
  }

  return newStr.join(' ');
}

// Brad's solutions:
function cap3(str) {
  let strArr = str.toLowerCase().split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  }

  return strArr.join(' ');
}

function cap4(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

const output = cap4('i love JAVAscript');
console.log(output);
