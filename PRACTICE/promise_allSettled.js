
// Promise.allSettled takes an array of promises and returns a single promise that always
// resolves to an array of objects containing results of the input promises.

// >>> Use Promise.allSettled when you do not care about the successful result of all promises.

// Promise.allSettled is similar to Promise.all except that it returns a promise that
// resolves no matter if any or all of the input promises are fulfilled or rejected.

// The resolved value of Promise.allSettled is an array of objects with status (either fullfilled or rejected)
// and the resolved value of the individual promise.

(async () => {
  const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'promise1'));
  const p2 = new Promise((resolve) => setTimeout(resolve, 500, 'promise2'));

  const allResolved = await Promise.allSettled([p1, p2]);

  console.log(allResolved);
  /**
  * [
  *   { status: 'fulfilled', value: 'promise1' },
  *   { status: 'fulfilled', value: 'promise2' },
  * ]
  */
})();

// Since Promise.allSettled always resolves, we have to manually check the resolved status of each input promise
// to check if any of the promises are failed:

(async () => {
  const p1 = Promise.resolve('prom1 success');
  const p2 = Promise.reject('prom2 failure');

  const [p1Res, p2Res] = await Promise.allSettled([p1, p2]);

  if (p2Res.status === 'rejected') {
    console.log('p2Res failed!', p2Res); // { status: 'rejected', reason: 'prom2 failure' }
  }

  console.log('p1Res', p1Res); // { status: 'fulfilled', value: 'prom1 success' }
})();

// Promise.all vs Promise.allSettled
// Promise.all resolves to a single promise only when all the input promises are fulfilled and rejects otherwise.
// Promise.allSettled always resolves to a single promise with the status of individual input promises.
