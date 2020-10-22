
function countDown(x) {
  if (x < 0) return;
  console.log(x);
  countDown(x - 1);
}

// countDown(10);

function countUp(x, max) {
  if (x > max) return;
  console.log(x);
  countUp(x + 1, max);
}

countUp(4, 10);
