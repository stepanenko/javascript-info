
let lion = {
    'lion-baby': "cub"
};

// dot notation:
// console.log(lion.lion-baby); // error: ReferenceError: baby is not defined

// bracket notation:
console.log(lion['lion-baby']); // "cub"

// Example 2
let category = 'carnivore';
let lion2 = {
    'lion-baby': "cub",
    [category]: true,
};

console.log(lion2); // { lion-baby: "cub" , carnivore: true }

// Example 3
const age = 8;
const number = 5;
const gavebirth = true;
// BUT!
const rare = 0;
const fast = false;

let animal = {
    name: 'lion',
    [age > 10 ? 'old' : 'young']: true,
    [gavebirth && 'babies']: number,
    [rare && 'rare']: true,
    [fast && 'runs fast']: 'yes',
};

console.log(animal); // { '0': true, name: 'lion', young: true, babies: 5, false: 'yes' }

// Example 4, strange '' key
let obj = {
    "": 'weird',
    '': 'strange also',
};

console.log(obj); // { '': 'strange also' }

// Example 5, strange [0] and [false]
let ob = {
    [0]: 'zero',
    [false]: 'bollean'
};

ob[true] = 'bool true';

console.log(ob); // { '0': 'zero', false: 'bollean', true: 'bool true' }
console.log(Object.keys(ob)); // [ '0', 'false', 'true' ]
