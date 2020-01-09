// Video: https://www.youtube.com/watch?v=M2bJBuaOeOQ

// Challenge 3: Reverse an integer

const revInt = (int) => parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);

const revInt2 = (num) => {
  return num < 0 ?
    parseInt('-' + num.toString().split('').reverse('').join('')) :
    parseInt(num.toString().split('').reverse('').join(''));
}

console.log(revInt(-159));
