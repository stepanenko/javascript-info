
const words = ['Cristina', "Ray Adverb", 'cinema', 'incema'];

const findAnagrams = (word, allWords) => {
  let res = [];
  allWords.forEach(w => {
    if (w.toLowerCase().split('').sort().join('') === word.toLowerCase().split('').sort().join('')) {
      res.push(w);
    }
  });
  return res;
}

const findAnagrams2 = (word, allWords) => {
  return allWords.reduce((acc, w) => {
    if (w.toLowerCase().split('').sort().join('') === word.toLowerCase().split('').sort().join('')) {
      return [...acc, w];
    }
    return acc;
  }, []);
}


console.log(findAnagrams2("iceman", words));
console.log(findAnagrams2("cristian", words));
console.log(findAnagrams2("Dave Barry", words));
console.log(findAnagrams2("Dave", words));

