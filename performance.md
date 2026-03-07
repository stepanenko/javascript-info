## Ways to measure performance in JavaScript:

```js
performance.now():
```
- Most precise method
- Returns a high-resolution timestamp in milliseconds
- Provides microsecond precision
- Works in browsers and newer Node.js versions

```js
Date.now():
```
- Simple method
- Returns milliseconds since Unix epoch
- Less precise than `performance.now()`
- Widely supported

```js
console.time() and console.timeEnd():
```
- Built-in console method
- Easy to use
- Prints directly to console
- Less programmatically useful

```js
process.hrtime():
```
- Node.js specific high-resolution time
- Provides nanosecond precision
- Good for server-side performance measurements

### Pro Tips:

- For most web browser scenarios, use `performance.now()`
- For Node.js, use `process.hrtime()`
- The wrapper function is a convenient way to time any function's execution
