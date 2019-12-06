// Video: https://www.youtube.com/watch?v=M2bJBuaOeOQ

// Challenge 1: Reverse a string

function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function rev2(str) {
  let rev = '';
  for(let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}

function rev3(str) {
  let rev = '';
  for(let i = 1; i <= str.length; i++) {
    rev = rev + str[str.length - i];
  }
  return rev;
}

function rev4(str) {
  let rev = '';
  for(let char of str) {
    rev = char + rev;
  }
  return rev;
}

function rev5(str) {
  let rev = '';
  str.split('').forEach(char => {
    rev = char + rev;
  })
  return rev;
}

function rev6(str) {
  return str.split('').reduce((rev, char) => char + rev);
}

// console.log(rev6('hello'));
// console.log(reverse('hello'));
