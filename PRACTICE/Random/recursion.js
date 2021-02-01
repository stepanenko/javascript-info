let a = [1, 2, 3, 4, 5, 3];

function hasDuplicates(array) {
  console.log(array);
  let first = array[0];
  for (let i = 1; i < array.length; i++) {
    if (first === array[i]) return true;
  }
  if (array.length === 0) return false;
  return hasDuplicates(array.slice(1));
}

let res = hasDuplicates(a);
console.log(res);
