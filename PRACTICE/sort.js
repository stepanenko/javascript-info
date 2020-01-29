
let array = [
  { rank: 2 },
  { rank: 0 },
  { rank: -10 },
  { rank: NaN },
  { rank: 7 },
  { rank: 3 },
  { rank: -1 }
];

let sorted = array.sort((a, b) => {
  if (isNaN(a.rank)){
    return 1;
  } else if (isNaN(b.rank)) {
      return -1;
  }
  return b.rank - a.rank; 

});

console.log(sorted);


// From => https://obscurejavascript.tumblr.com/post/125103356483/sorts-and-nan-in-javascript
