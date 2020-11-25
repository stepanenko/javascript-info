
const arr = [1, 3, 4, 5, 0, 2]; // should return 4
// const arr = [2, 2, 1]; // should return 2
// const arr = [-2, -1]; // should return -2
// const arr = [1, 2, 2, 1]; // should return 2
// const arr = [1]; // should return 2
// const arr = []; // should return 2

function secondLargest(arr) {
  if (arr.length < 2) return null;
  let largest = arr[0];
  let secondLargest = arr[0];

  arr.forEach((el, i) => {
    if (el > largest) largest = el;
    if (arr[i - 1] < largest && arr[i - 1] > secondLargest) secondLargest = arr[i - 1];
  });
  return { largest, secondLargest };
}

// Teacher solution:
function secondLargest2(arr) {
  let largest = null;
  let secondLargest = null;

  arr.forEach(current => {
    if (largest === null) {
      largest = current;
    } else if (current > largest) {
      secondLargest = largest;
      largest = current;
    } else if (secondLargest === null) {
      secondLargest = current;
    } else if (current > secondLargest) {
      secondLargest = current;
    }
  });
  return { largest, secondLargest };
}

let result = secondLargest2(arr);
console.log(result);
