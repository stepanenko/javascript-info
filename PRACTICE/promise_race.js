
// Promise.race is similar to Promise.any except that it returns a promise that
// resolves or rejects based on the fastest promise (given as input) that resolves or rejects.

// >>> Use Promise.race when you care about the fastest promise that either succeeds or fails.

(async () => {
  const p1 = new Promise((resolve) => setTimeout(resolve, 500, 'promise1 quick'));
  const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'promise2 quicker'));

  const firstResolved = await Promise.race([p1, p2]);

  console.log(firstResolved); // promise2 quicker
})();

// If the fastest promise fails, Promise.race also fails:

(async () => {
  try {
    const p1 = new Promise((resolve) => setTimeout(resolve, 500, 'promise1 quick'));
    const p2 = new Promise((_, reject) => setTimeout(reject, 100, 'promise2 quicker failed'));

    const firstResolved = await Promise.race([p1, p2]);

    console.log(firstResolved);
  } catch (error) {
    console.log(error); // promise2 quicker failed
  }
})();

// === Promise.any vs. Promise.race ===
// Promise.any cares only about the fastest one to resolve whereas
// Promise.race cares about the fastest one that either resolves or rejects.
