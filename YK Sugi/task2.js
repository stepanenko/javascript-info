
function isGreater(s1, s2) {
  if (s1.length < s2.length) return false;
  else if (s1.length > s2.length) return true;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] > s2[i]) return true;
  }
  return false;
}

let result = isGreater('023', '125');
console.log(result);
