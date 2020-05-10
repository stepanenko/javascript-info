
const doSomethingAsync = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did it'), 1000);
  });
};

const doSomething = async () => {
  console.log(await doSomethingAsync());
};


console.log('Before');
doSomething();
console.log('After');


const aFunction = async () => {
  return 'test'
}

aFunction().then(console.log) // This will console.log 'test'
// and it's the same as:

const aFunction2 = async () => {
  return Promise.resolve('test')
}

aFunction2().then(console.log) // This will console.log 'test'



const fetch = async function () {
  return [{ id: 1, name: 'peter'}, { id: 2, name: 'adam'}];
};

const getFirstUserData = () => {
  return fetch() // get users list
    .then(allusers => console.log(allusers[0]));
};
// => { id: 1, name: 'peter' }

// And here is the same functionality provided using await/async:

const getFirst = async () => {
  const allusers = await fetch();
  const first = allusers[0];
  return console.log(first);
}

getFirstUserData(); // => { id: 1, name: 'peter' }

// Multiple async functions

const promiseToDoSomething = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve('I did something'), 2000);
  });
};

const watchOverSomeoneDoingSomething = async () => {
  const something = await promiseToDoSomething();
  return something + '\nand I watched';
};

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
  const something = await watchOverSomeoneDoingSomething();
  return something + '\nand I watched as well';
};

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
  console.log(res);
});

