
let maxFontSize = 14;
let fontSize = 12;
let maxLength = 20;

let sample = 'Hello worldHello worldHello world';  // 33 chars

function cutString(str) {
  if (maxFontSize / fontSize * maxLength < str.length) {
    return {
      str: str.slice(0, maxLength),
      len: maxFontSize / fontSize * maxLength
    }
  } else {
    return {
      str: str,
      len: maxFontSize / fontSize * maxLength
    }
  }
}

console.log(cutString(sample));

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done');
  }, 2000);
});

promise.then(value => console.log(value));
