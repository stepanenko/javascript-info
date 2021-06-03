
const originalArray = [1, 2, 3, 4, 5];

const copy = originalArray.slice();
console.log(copy === originalArray);   // false

const copy2 = [...originalArray];
console.log(copy2 === originalArray);   // false

const copy3 = Array.from(originalArray);
console.log(copy3 === originalArray);   // false

const copy4 = [].concat(originalArray);
console.log(copy4 === originalArray);   // false

const copy5 = Array(...originalArray);
console.log(copy5 === originalArray);   // false

const copy6 = new Array(...originalArray);
console.log(copy6 === originalArray);   // false

const copy7 = originalArray.map(el => el);
console.log(copy7 === originalArray);   // false

const copy8 = originalArray.filter(el => el);
console.log(copy8 === originalArray);   // false

const copy9 = originalArray.reduce((acc, el) => acc.concat(el), []);
const copy10 = originalArray.reduce((acc, el) => [...acc, el], []); // also valid
console.log(copy9 === originalArray);   // false

console.log(copy10);
