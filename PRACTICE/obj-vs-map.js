
// ....... OBJECT ........
let obj = { age: 30, 2: 'two' };

let numProp = 5;
obj[1] = 'one';
obj[numProp] = 'five';

console.log(obj);   // { '1': 'one', '2': 'two', '5': 'five', age: 30 }

console.log(typeof obj[1]);   // string
console.log(typeof obj[2]);   // string

// In general, like in Array, do not use built-in constructor over literal in creating new object, because:
// - More typing
// - Slower performance (much much slower)
// - Confusion & increasing more chances for mistake, for example:
// let obj = new Object(id: 1, name: "test")   // Error - obviously
let obj1 = { id: 1, name: "test" };
let obj2 = new Object(obj1); // obj1 and obj2 points to the same one
obj2.id = 2;
console.log(obj1.id); // 2

// ....... Accessing element ..........
map.get(1)   // 2

obj.id   // 1
obj['id']   // 1

map.has(1);  // return boolean value:  true/false

let isExist = obj.id === undefined;  // check if obj has that property defined before.
// or
isExist = 'id' in obj;  // which will apply for inherited property as well.

// The syntax in Map is simpler and more direct than in Object in this case.

// ....... Adding new element .........





// https://medium.com/front-end-weekly/es6-map-vs-object-what-and-when-b80621932373