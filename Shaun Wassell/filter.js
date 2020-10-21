
const words = ['ok', 'goodbye', 'freedom'];

const createLengthTest = minLen => word => word.length >= minLen;

const bigWords = words.filter(createLengthTest(5));

console.log(bigWords);
