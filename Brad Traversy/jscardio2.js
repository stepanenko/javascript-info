// Video: https://www.youtube.com/watch?v=M2bJBuaOeOQ

// Challenge 2: Palindrome

function isPalindrome(str) {
  const rev = str.split('').reverse().join('');
  return rev === str;
}

function isPalindrome2(str) {
  return str.split('').reverse().join('') === str;
}

function isPalindrome3(str) {
  return str.split('').reduce((rev, char) => char + rev) === str;
}

console.log(isPalindrome3('madam'));
