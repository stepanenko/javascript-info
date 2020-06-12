

function expensive(delay) {
  const start = Date.now();
  console.log('in progress...');
  while (Date.now() < start + delay * 1000) {}
  console.log('done');
}

expensive(5);
