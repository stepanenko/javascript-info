
function areSafe(arr) {
  let columns = {};

  for (let i = 0; i < arr.length; i++) {
    let row = null;
    for (let n = 0; n < arr.length; n++) {
      if (row === null && columns[n] && arr[i][n] === 1) {
        return false;
      } else if (row === null && arr[i][n] === 1) {
        row = i;
        columns[n] = true;
      } else if (row === i && arr[i][n] === 1) {
        return false;
      }
    }
  }
  return true;
}

// let result = areSafe([[1, 1], [0, 1]]); // False
let result = areSafe([[1, 0, 0], [0, 0, 1], [0, 1, 0]]); // True
// let result = areSafe([
//   [1, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 1, 1],
//   [0, 0, 0, 1]
// ]); // false
// console.log(result);

// Teacher solution:

function areSafe2(chess) {
  const n = chess.length;

  for (let row = 0; row < n; row++) {
    rowCount = 0;
    for (let col = 0; col < n; col++) {
      rowCount += chess[row][col];
    }
    if (rowCount > 1) return false;
  }

  for (let col = 0; col < n; col++) {
    colCount = 0;
    for (let row = 0; row < n; row++) {
      colCount += chess[col][row];
    }
    if (colCount > 1) return false;
  }

  return true;
}

let output = areSafe2([[1, 1], [0, 1]]); // False
// let output = areSafe2([[1, 0, 0], [0, 0, 1], [0, 1, 0]]); // True
console.log(output);
