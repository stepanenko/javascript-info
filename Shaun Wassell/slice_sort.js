
const arr = [7, 8, -6, 20, 2, 4, 0, 11, 3, 9];

const ascending = (a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

const descending = (a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
};

const sorted = arr.slice().sort(descending); // slice is used to copy an array and avoid mutation

console.log(sorted);
