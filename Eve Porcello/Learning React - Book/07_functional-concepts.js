
// page 54

// When writing functions, try to follow these three rules:
// - 1. The function should take in at least one argument
// - 2. The function should return a value or another function
// - 3. The function should not change or mutate any of its arguments

// Functional programming is all about transforming data from one form to another.
// There are two core functions that you must master in order to be proficient with functional JS:
// ==== Array.map and Array.reduce ====

const schools = ["Yorktown", "Washington & Liberty", "Wakefield"];

console.log(schools.join(", ")); // "Yorktown, Washington & Liberty, Wakefield"

// The original array is still intact; join simply provides a different take on it.
// The details of how this string is produced are abstracted away from the programmer.

// If we wanted to create a function that creates a new array of the schools that begin
// with the letter "W" we could use the Array.filter method:

const wSchools = schools.filter(school => school[0] === "W");

console.log(wSchools); // ["Washington & Liberty", "Wakefield"]

// When it’s time to remove an item from an array, we should use Array.filter over
// Array.pop or Array.splice because Array.filter is immutable:

const cutSchool = (cut, list) => list.filter(school => school !== cut);

console.log(cutSchool("Washington & Liberty", schools).join(", ")); // "Yorktown, Wakefield"

// If you need to create a pure function that changes one object in an array of objects, map can be used:

let schools2 = [{ name: "Yorktown" }, { name: "Stratford" }];

const editName = (oldName, name, arr) =>
  arr.map(item => (item.name === oldName ? { ...item, name } : item));

let updatedSchools = editName("Stratford", "HB Woodlawn", schools2);

console.log(updatedSchools[1]); // { name: "HB Woodlawn" }
console.log(schools2[1]); // { name: "Stratford" }

// The final tool that we need in our functional arsenal is the ability to transform arrays into primitives and other objects.
// The reduce and reduceRight functions can be used to transform an array into any value, including:
// number, string, boolean, object, or even a function:

const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => (age > max ? age : max), 0);
// The callback returns the greater of the two numbers, 21, and that becomes the max value during the next iteration.

console.log(maxAge); // 64

// reduceRight works the same way as reduce; the difference is that it starts reducing from the end of the array rather than the beginning.

// Sometimes we need to transform an array into an object:

const colors = [
  {
    id: "xekare",
    title: "rad red",
    rating: 3,
  },
  {
    id: "jbwsof",
    title: "big blue",
    rating: 2,
  },
  {
    id: "prigbj",
    title: "grizzly grey",
    rating: 5,
  }
];

const hashColors = colors.reduce((hash, { id, title, rating }) => {
  hash[id] = { title, rating };
  return hash;
}, {});
