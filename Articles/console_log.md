## Advanced console logging

### 1. Use object

```js
console.log({ name, age, job, hobbies });
```

### 2. Use `console.table()`

### 3. Use `console.warn()`

### 4. Use `console.error()`

The following example will give you a call stack trace:

```js
const a = () => {
  console.error("error");
}
const b = () => {
  a();
}
const c = () => {
  b();
}

c();
```

### 5. Use `console.time()` & `console.timeEnd()`

You can do this:
```js
let startTime = Date.now();
let count = 0;

for (let i = 0; i < 1000000000; i++) {
  count++;
}

console.log(Date.now() - startTime);
```

But with `console.time()` & `console.timeEnd()` you can do this:
```js
let count = 0;

console.time();
for (let i = 0; i < 1000000000; i++) {
  count++;
}
console.timeEnd();
```

If you want to count the execution time of multiple pieces of code, you need to give it a flag:
```js
let count = 0;

console.time('time1');

for (let i = 0; i < 1000000000; i++) {
  count++;
}

console.timeEnd('time1');

console.time('time2');

for (let i = 0; i < 1000000000; i++) {
  count++;
}

console.timeEnd('time2');
```

### 6. Use CSS

```js
console.log('%cfatfish', 'color: red;');
```
