
// The flatMap() method is identical to a map followed by a call to flat() of depth 1
// !!! To work in NodeJS REQUIRES version 11.15+ or better 12.4+ but well supported in Chrome Browser

let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// => [["it's","Sunny","in"],[""],["California"]]

let res1 = arr1.flatMap(x => x.split(" "));
// => ["it's","Sunny","in", "", "California"]


// ____ reduce() and concat() ____

let arr = [1, 2, 3, 4];

let res2 = arr.flatMap(x => [x, x * 2]);  // => [1, 2, 2, 4, 3, 6, 4, 8]
// is equivalent to
let res3 = arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// => [1, 2, 2, 4, 3, 6, 4, 8]

console.log(res1, res2, res3);
