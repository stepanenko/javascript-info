
//  How to simplify your codebase with map(), reduce(), and filter() 

// 1. Remove duplicates from an array of numbers/strings
const values = [3, 4, 1, 1, 4, 5, 5];
const unique = [...new Set(values)];
// => [ 3, 4, 1, 5 ]


// 2. A simple search (case-sensitive)
const users = [
  { id: 11, name: 'Adam', age: 23, group: 'editor' },
  { id: 47, name: 'John', age: 28, group: 'admin' },
  { id: 85, name: 'William', age: 34, group: 'editor' },
  { id: 97, name: 'Oliver', age: 28, group: 'admin' }
];

const find = users.filter(user => user.name.includes('oli'));
// => []


// 3. A simple search (case-insensitive)
const find2 = users.filter(it => new RegExp('oli', "i").test(it.name));
// => [ { id: 97, name: 'Oliver', age: 28, group: 'admin' } ]


// 4. Check if any of the users have admin rights
const hasAdmin = users.some(user => user.group === 'admin');
// => true


// 5. Flattening an array of arrays
// using the spread operator inside a reduce is not great for performance. 
const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, el) => [...acc, ...el], []);
// we can omit an empty array [] as the second argument
// the first value of the nested will be used as the initial acc value.
let flat2 = nested.reduce((acc, el) => [...acc, ...el]);
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let flat3 = [].concat.apply([], nested);
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let flat4 = [].concat(...nested);
// => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
let conc = [3].concat(4, 5, 6, [7, [7.5], 8])
// => [ 3, 4, 5, 6, 7, [ 7.5 ], 8 ]

console.log(flat4);


