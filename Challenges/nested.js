
// Write a function that returns the total number of non-nested items in a nested array.

// My solution:
function getLength(array) {
  let result = [];

  flat(array);

  function flat(input) {
    input.forEach(el => {
      if (el instanceof Array) {   /// if (Array.isArray(el)) {
        flat(el);
      } else {
        result.push(el);
      }
    });
  }

  return result.length;
}

// Given solution 1:
const getLength2 = arr => arr.flat(Infinity).length;

// Given 2:
function getLength3(arr) {
  return arr.reduce((acc, el) => {
    return Array.isArray(el) ? acc + getLength(el) : acc + 1;
  }, 0);
}

// Given 3:
function getLength4(arr) {
  return arr.length === 0 ? 0 : JSON.stringify(arr).match(/\w/g).length || 0;
  // JSON.stringify([1, [2, [3, 4]]]).match(/\w/g)   // => [ '1', '2', '3', '4' ]
}

function getLength5(arr) {
	let i = 0;
	for (const item of arr) {
		i += Array.isArray(item) ? getLength(item) : 1;
	}
	return i;
}


console.log(getLength5([1, [2, 3]])); // => 3
console.log(getLength5([1, [2, [3, 4]]])); // => 4
console.log(getLength5([1, [2, [3, [4, [5, 6]]]]])); // => 6
