
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

let visits = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// lets say some users come multiple times
visits.add(john);
visits.add(pete);
visits.add(mary);
visits.add(john);
visits.add(mary);

// set keeps only unique values
console.log(visits.size); // 3

for (let user of visits) {
  console.log(user.name); // John (then Pete and Mary)
}

// The alternative to Set could be an array of users, and the code to check for duplicates on every insertion using arr.find.
// But the performance would be much worse, because this method walks through the whole array checking every element.
// Set is much better optimized internally for uniqueness checks.

// === Iterating with for..of and forEach: ===

let fruits = new Set(["oranges", "apples", "bananas"]);

for (let value of fruits) console.log(value);

// the same with forEach:
fruits.forEach((value, valueAgain, fruits) => {
  console.log(value);
});
