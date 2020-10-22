
// ___ PARTIAL and CURRYING ___
const add = (x, y, z) => x + y + z;

const addPartial = (x) => (z, y) => x + z + y;

const add5 = addPartial(5);

const res = add5(2, 5);

console.log(res);


const addAll = x => y => z => x + y + z;

// passing arguments one at a time is called CURRYING

const sum = addAll(1)(2)(3);

// or 
const sum1 = addAll(1);
const sum2 = sum1(2);
const sum3 = sum2(3);

console.log(sum3);
