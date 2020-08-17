
// Bad
someBoolean && (someStatement = 10);

// Good
if (someBoolean) {
  someStatement = 10;
}
// or
if (someBoolean) someStatement = 10;


// Bad
var a = 1,
b = 2;

b = (a++, 10);

// Good
var a = 1;
var b = 2;
a++;
b = 10;
