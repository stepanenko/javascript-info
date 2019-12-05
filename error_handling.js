
// Usually, a script “dies” (immediately stops) in case of an error, printing it to console. 
// But we can use 'try..catch' that, instead of dying 'catches' errors...

try {
  console.log('start of try 1 runs...');
  lalalala; // ...no errors here
  console.log('end of try 1! never reached');

} catch(err) {
  console.log('An error has occured!');
}


try {
  console.log('start of try 2 runs...');
  // ...no errors here
  console.log('end of try 2 runs...');

} catch(err) {
  console.log('Catch is ignored, no errors in "try"');
}

// try..catch only works for RUNTIME errors, the code must be runnable, 
// it should be valid JavaScript
// It won’t work if the code is syntactically wrong


// try..catch works SYNCHRONOUSLY
// If an exception happens in “scheduled” code, like in setTimeout, then try..catch won’t catch it
// try {
//   setTimeout(function() {
//     noSuchVariable; // script will die here
//   }, 1000);
// } catch (e) {
//   alert( "won't work" );
// }


// To catch an exception inside a scheduled function, try..catch must be inside that function:

setTimeout(function() {
  try {
    noSuchVar;
  } catch (err) {
    console.log(`Error name: '${err.name}', error message: '${err.message}'`);
  }
}, 1000);
