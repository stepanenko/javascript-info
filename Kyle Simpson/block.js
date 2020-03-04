let x = 2;

function myf() {
  {
    let y = 4;
    console.log(x);
  }
  console.log(y); // ReferenceError: y is not defined
}

myf();
