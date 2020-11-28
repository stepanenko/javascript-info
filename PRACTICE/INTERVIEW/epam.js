
function findSumIndx(arr, targetSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let k = 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === targetSum) {
        return [i, k];
      }
    }
    k++
  }
  return null;
}

findSumIndx([1, 2, 2], 4) // => [1, 1]

findSumIndx([2, 3, 2], 6) // => null
findSumIndx([2, 3, 2], 4) // => [0, 2]
findSumIndx([2, 3, 1], 4) // => [1, 2]
