
const foo = {
  a: 5
}

const bar = Object.create(foo);

console.log(bar.a); // 5
