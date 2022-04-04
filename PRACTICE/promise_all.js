
// The Promise.all method takes an array of promises and returns a single promise
// that resolves to an array of the results of the input promises.

(async () => {
  const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'promise1'));
  const p2 = new Promise((resolve) => setTimeout(resolve, 500, 'promise2'));
  const p3 = Promise.resolve('promise3');

  const allResolved = await Promise.all([p1, p2, p3]);

  console.log('res:', allResolved); // ['promise1', 'promise2', 'promise3']
})();

// Note that promises start their task when they are being created.
// Promise.all just waits until all the given promises are resolved.

// Promise.all rejects immediately when any of the given promises in input fails. For example:
(async () => {
  try {
    const p1 = Promise.reject('promise 1 failed');
    const p2 = Promise.resolve('promise2');

    const allResolved = await Promise.all([p1, p2]);

    console.log(allResolved);
  } catch (error) {
    console.log(error); // promise 1 failed
  }
})();

// Since p1 was rejected Promise.all won’t care for other promises and jumps right to the catch block.

// >>>>>>>>  Use Promise.all when:  <<<<<<<<<
// - You only care about the successful result of all promises.
// - Your code relies on multiple related asynchronous tasks to work correctly. So instead of running
// these tasks serially, kick off them parallelly and wait for their execution with a single Promise.all
