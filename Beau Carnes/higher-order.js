
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





console.log(find);
