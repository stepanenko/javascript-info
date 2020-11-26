
// Calculate the sum of diagonal numbers
let arr = [
  [4, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let sum = 0;
let index = 0;

arr.forEach(row => {
  row.forEach((elem, elemIndex) => {
    if (elemIndex === index)
      sum += row[index];
  });
  index++;
});

console.log('sum', sum);
