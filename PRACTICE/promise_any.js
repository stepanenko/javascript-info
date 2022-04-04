
// Promise.any takes an array of promises and returns a single promise that
// resolves as soon as any of the promises in the input array fulfills.

// >>> Use Promise.any when you care only about the fastest one to resolve.

(async () => {
  const p1 = Promise.reject('promise1 failed');
  const p2 = new Promise((resolve) => setTimeout(resolve, 500, 'promise2 quick'));
  const p3 = new Promise((resolve) => setTimeout(resolve, 100, 'promise3 quicker'));

  const firstResolved = await Promise.any([p1, p2, p3]);

  console.log(firstResolved); // promise3 quicker
})();

// In the above snippet, p1 is failing but Promise.any doesn’t care because p3 is the fastest (after p1) and resolves too.

// If all the promises are rejected then the returned promise is also rejected with an error:

(async () => {
  try {
    const p1 = Promise.reject('promise1 failed');
    const p2 = Promise.reject('promise2 failed');
    const p3 = Promise.reject('promise3 failed');

    const firstResolved = await Promise.any([p1, p2, p3]);

    console.log(firstResolved);
  } catch (error) {
    console.log(error); // [AggregateError: All promises were rejected]
  }
})();
