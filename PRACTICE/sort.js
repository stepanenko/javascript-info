
let array = [
  { rank: 2 },
  { rank: 7 },
  { rank: 0 },
  { rank: -10 },
  { rank: NaN },
  { rank: 7 },
  { rank: 3 },
  { rank: NaN },
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

let sorted2 = array.sort((a, b) => {
  return isNaN(a.rank) ? 1 : isNaN(b.rank) ? -1 : b.rank - a.rank;
})

console.log(sorted2);


// From => https://obscurejavascript.tumblr.com/post/125103356483/sorts-and-nan-in-javascript
