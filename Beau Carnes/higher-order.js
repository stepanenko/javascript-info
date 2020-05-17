
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


// 6. Create an object that contains the frequency of the specified key
const groupByAge = users.reduce((acc, it) => {
  acc[it.age] = acc[it.age] + 1 || 1;
  return acc;
}, {});

// => { 23: 1, 28: 2, 34: 1 }

// 7. Indexing an array of objects (lookup table)
const uTable = users.reduce((acc, it) => (acc[it.id] = it, acc), {});
// or ...
const uTable2 = users.reduce((acc, it) => {
  acc[it.id] = it;
  return acc;
}, {});
// => { '11': { id: 11, name: 'Adam', age: 23, group: 'editor' },
//   ... }


// 8. Extract the unique values for the given key of each item in the array

const uniques = new Set([1, 1, 2, 3, 3]); // => Set { 1, 2, 3 }
const listOfUserGroups = [...new Set(users.map(u => u.group))];
// => [ 'editor', 'admin' ]


// 9. Object key-value map reversal
const cities = {
  Lyon: 'France',
  Berlin: 'Germany',
  Paris: 'France'
};

let countries = Object.keys(cities)
  .reduce((acc, city) => (acc[cities[city]] = [...(acc[cities[city]] || []), city], acc), {});
// => { France: [ 'Lyon', 'Paris' ], Germany: [ 'Berlin' ] }

// We use the comma operator here, and it means we return the last value in parenthesis — acc.
// Let’s rewrite this example in a more production-ready and performant way:
let countries2 = Object.keys(cities).reduce((acc, city) => {
  let country = cities[city];
  acc[country] = acc[country] || [];
  acc[country].push(city);
  return acc;
}, {});
// Here we don’t use spread operator — it creates a new array on each reduce() call,
// which leads to a big performance penalty: O(n²). Instead the old good push() method.



console.log(countries2);


