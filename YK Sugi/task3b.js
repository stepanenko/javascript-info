
// Calculate the sum of diagonal numbers
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

function diaSum2(arr) {
  let sum = 0;
  let index = 0;

  arr.forEach(row => {
    row.forEach((elem, elemIndex) => {
      if (elemIndex === index)
        sum += row[index];
    });
    index++;
  });

  return sum;
}

// Teacher solution:
function diaSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][i];
  }
  return sum;
}

let res = diaSum(arr);
console.log('sum', res);
