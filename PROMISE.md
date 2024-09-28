Summary of Promise Methods:

- `Promise.all()` Waits for all promises to resolve or rejects if any fail.
- `Promise.race()` Resolves or rejects as soon as one promise completes.
- `Promise.allSettled()` Waits for all promises to settle (either resolved or rejected) and returns their results.
- `Promise.any()` Resolves when any promise resolves, rejects only if all promises reject.
- `Promise.resolve()` Returns a resolved promise.
- `Promise.reject()` Returns a rejected promise.
- `Promise.prototype.finally()` Runs after a promise is settled (either resolved or rejected), often used for cleanup.
