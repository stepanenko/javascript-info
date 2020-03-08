
// Please create a function trasforming array into object like this:
// Input: [{name: 'width', value: 10}, {name: 'height', value: 20}];
// Output: {width: 10, height: 20};

let input = [{name: 'width', value: 10}, {name: 'height', value: 20}];

function transform(arr) {
  let obj = {};

  arr.forEach(o => {
    obj[o.name] = o.value
  });

  return obj;
}

let result = transform(input);

console.log(result);
