
const someObj = {
    var1: 1,
    var2: 2,
    someProp1: 'prop1',
    someProp2: 'prop2',
};

const { var1, var2, ...obj } = someObj;

console.log('obj', obj); // we copied all from someObj to obj, except of var1 and var2


// lets see if its really a copies
someObj.someProp2 = '2 edited';
obj.someProp1 = 'new value';

console.log('obj', obj); // { someProp1: 'new value', someProp2: 'prop2' }
console.log('someObj', someObj); // { var1: 1, var2: 2, someProp1: 'prop1', someProp2: '2 edited' }
