
let arr = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 1],
  [0, 0, 0, 1]
];
let row = null;
let columns = {};


for (let i = 0; i < arr.length; i++) {
  row = null;

  for (let n = 0; n < arr.length; n++) {
    if (row === null && columns[n] && arr[i][n] === 1) {
      console.log('ATTACK');
    } else if (row === null && arr[i][n] === 1) {
      row = i;
      columns[n] = true;
    } else if (row === i && arr[i][n] === 1) {
      console.log('attack!');
    }
  }
}

console.log('columns:', columns);
