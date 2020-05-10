
// The void operator evaluates the given expression and then returns undefined.

void function test() {
  console.log('boo!');
}();

try {
  test();
} catch (e) {
  console.log(e.message);
  // expected output: ReferenceError: test is not defined
}

void 2 == '2';   // (void 2) == '2', returns false
void (2 == '2'); // void (2 == '2'), returns undefined

void function iife() {
  console.log("Executed!");
}();  // without the void will result in an Uncaught SyntaxError.

let returned = void function() {
  return 5;
};

console.log(returned); // undefined

console.log(void 0); // undefined

function doSmth() {
  return 'done';
}

let someStuff = void doSmth();
// someStuff => undefined
