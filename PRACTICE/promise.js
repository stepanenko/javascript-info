
function wait() {
  return new Promise(res => setTimeout(res, 1000));
}

// run promises in sequential/serial flow:
(async () => {
  console.time('timeSerial');

  await wait();
  await wait();

  console.timeEnd('timeSerial');
})();

// run parallel:
(async () => {
  console.time('timeParallel');

  const p1 = wait();
  const p2 = wait();
  await Promise.all([p1, p2]);

  console.timeEnd('timeParallel');
})();


// More: https://betterprogramming.pub/4-javascript-promise-methods-all-allsettled-any-and-race-ba0e0c8c034e
