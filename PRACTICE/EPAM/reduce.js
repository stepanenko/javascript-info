
const arr = [{ name: 'a', score: 44 }, { name: 'b', score: 67 }, { name: 'c', score: 88 }];

const res = arr.reduce((acc, curr) => {

  if (curr.score > 65) {
    // acc = [].concat(acc, curr.name);
    acc = [...acc, curr.name];
  }

  return acc;
}, []);

console.log(res);
