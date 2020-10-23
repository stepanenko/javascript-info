
const words = ['Cristina', 'rinatics', "Ray Adverb", 'cinema', 'anemic'];

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

const findAnagrams3 = (word, allWords) => {
  return allWords.reduce((acc, w) => {
    return word.toLowerCase().split('').sort().join('') === w.toLowerCase().split('').sort().join('')
      ? [...acc, w]
      : acc;
  }, []);
}


console.log(findAnagrams3("iceman", words));
console.log(findAnagrams3("cristian", words));
console.log(findAnagrams3("Dave Barry", words));
console.log(findAnagrams3("Dave", words));
