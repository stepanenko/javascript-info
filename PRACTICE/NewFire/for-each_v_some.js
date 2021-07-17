
let config = [
  { id: 1, name: 'Peter' },
  { id: 2, name: 'Tom' },
  { id: 3, name: 'Kira' },
];

// config = [];

// console.log(config?.filter(o => o.id === 3));

let vars = {
  headers: [
    { id: 1, name: 'Peter' },
    { id: 2, name: 'Jack' },
    { id: 3, name: 'Kira' },
  ]
};

// vars = [];
// vars.headers = undefined;

function checkId() {
  let hasFound = false;

  config?.forEach((obj, i) => {
    // will always iterate over all array elements
    console.log('in forEach:', i);
    if (obj.name !== vars?.headers[i].name) {
      hasFound = true;
      // return true;  // will not stop iteration and will not return from 'checkId()'
      // break;  // error
    }
  });

  return hasFound;
}

const res1 = checkId();
console.log('res1', res1);

// ========

function checkId2() {
  return config?.some((obj, i) => {
    // will iterate only untill true was found
    console.log('in some:', i);
    return obj.name !== vars.headers[i].name;
  });
}

const res2 = checkId2();
console.log('res2', res2);


// inspired by https://masteringjs.io/tutorials/fundamentals/foreach-break
