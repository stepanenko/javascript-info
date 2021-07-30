
const someObj = {  };
// const someObj = { val: {} };

someObj.first = 'Peter';
// someObj.val.second = 'Jackson';

delete someObj?.val?.second; // valid

console.log(someObj);
