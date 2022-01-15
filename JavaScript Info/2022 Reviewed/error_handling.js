
// Usually, a script “dies” (immediately stops) in case of an error, printing it to console. 
// But we can use 'try..catch' that, instead of dying 'catches' errors...

try {
  console.log('start of try 1 runs...');
  lalalala;
  console.log('end of try 1! never reached');
} catch (err) {
  console.log('An error has occured!');
}

try {
  console.log('start of try 2 runs...');
  console.log('end of try 2 runs...');
} catch (err) {
  console.log('Catch is ignored, no errors in "try"');
}

// try..catch only works for RUNTIME errors, the code must be runnable, 
// it should be valid JavaScript, it won’t work if the code is syntactically wrong

// try..catch works SYNCHRONOUSLY, if an exception happens in “scheduled” code,
// like in setTimeout, then try..catch won’t catch it:
// try {
//   setTimeout(function () {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (e) {
//   console.log("won't work");
// }

// To catch an exception inside a scheduled function, try..catch must be inside that function:

setTimeout(function () {
  try {
    noSuchVar;
  } catch (err) {
    console.log(`Error name: '${err.name}', error message: '${err.message}'`);
    console.log(`Call stack: '${err.stack}'`); // Shows an error as a whole
    console.log('Whole error', err); // similar but not equal to 'err.stack'
  }
}, 1000);
