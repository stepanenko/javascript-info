
function isGreater(s1, s2) {
  if (s1.length < s2.length) return false;
  else if (s1.length > s2.length) return true;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] > s2[i]) return true;
  }
  return false;
}

// let result = isGreater('223', '125'); // should be true
let result = isGreater('11', '0'); // should be true
// let result = isGreater('1', '1'); // should be false
console.log(result);
