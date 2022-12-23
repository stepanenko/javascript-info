
## Using `async/await` with a `forEach` loop

[Axel Rauschmayer's blog post about asynchronous iteration](https://2ality.com/2016/10/asynchronous-iteration.html)

## 1

### Reading in sequence

If you want to read the files in sequence, you cannot use `forEach`.
Just use a modern `for ... of` loop instead, in which `await` will work as expected:

```js
async function printFiles () {
  const files = await getFilePaths();

  for (const file of files) {
    const contents = await fs.readFile(file, 'utf8');
    console.log(contents);
  }
}
```

### Reading in parallel

If you want to read the files in parallel, you cannot use `forEach`.
Each of the async callback function calls does return a promise, but you're throwing them away instead of awaiting them.
Just use `map` instead, and you can `await` the array of promises that you'll get with `Promise.all`:

```js
async function printFiles () {
  const files = await getFilePaths();

  await Promise.all(files.map(async (file) => {
    const contents = await fs.readFile(file, 'utf8')
    console.log(contents)
  }));
}
```

## 2

### Simplify with ES2018:

```js
async function printFiles () {
  const files = await getFilePaths()

  for await (const contents of files.map(file => fs.readFile(file, 'utf8'))) {
    console.log(contents)
  }
}
```
Simplified:
```js
for await (const results of array) {
    await longRunningTask()
  }
  console.log('I will wait')
```

## 3

### Using `reduce` with `Promise.resolve()`

Instead of `Promise.all` in conjunction with `map` (which does not guarantee the order in which the Promises are resolved),
I use `reduce`, starting with a resolved Promise:

```js
async function printFiles () {
  const files = await getFilePaths();

  await files.reduce(async (promise, file) => {
    // This line will wait for the last async function to finish.
    // The first iteration uses an already resolved Promise
    // so, it will immediately continue.
    await promise;
    const contents = await fs.readFile(file, 'utf8');
    console.log(contents);
  }, Promise.resolve());
}
```
`Promise.resolve()` returns an already resolved Promise object, so that `reduce` has a Promise to start with.
`await promise;` will wait for the last Promise in the chain to resolve.
The files will be processed sequentially, one at a time.

More at: https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop/

---
