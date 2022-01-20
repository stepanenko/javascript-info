
// The main feature is that repeated calls of set.add(value) with the same value don’t do anything.

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log(set.size);   // 3

for (let user of set) {
  console.log(user.name);   // John  Pete  Mary
}

// The alternative to Set could be an array of users, and the code to check for duplicates
// on every insertion using arr.find. But the performance would be much worse,
// because this method walks through the whole array checking every element.
// Set is much better optimized internally for uniqueness checks.

// __ Iteration __

let carsSet = new Set(['BMW', 'Renault', 'Audi']);
let fruits = new Set(['apples', 'oranges', 'kiwis']);

for (const car of carsSet) console.log('for loop:', car);

carsSet.forEach(el => console.log('forEach:', el));

let keys = carsSet.keys();
// => [Set Iterator] { 'BMW', 'Renault', 'Audi' }

let values = carsSet.values();
// => [Set Iterator] { 'BMW', 'Renault', 'Audi' }

let entries = fruits.entries();
// => [Set Iterator] { 'apples', 'oranges', 'kiwis' }
