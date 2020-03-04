
const object = {
  language: 'JavaScript',
  coolness: 9001
};

const entries = Object.entries(object); 
// => [ [ 'language', 'JavaScript' ], [ 'coolness', 9001 ] ]

// ==== Convert the object into a map: ====
const map = new Map(entries);
// => Map { 'language' => 'JavaScript', 'coolness' => 9001 }

// ==== Convert the map back into an object: ====
// const objectCopy = Object.fromEntries(map); // needs nodejs v 12.11+

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350]
]);
// ==== chaining Maps: ====
recipeMap
  .set('onion', 45)
  .set('orange', 5);

// ==== iterating Maps: ====
recipeMap.keys(); // [Map Iterator] { 'cucumber', 'tomatoes', 'onion', 'orange' }
recipeMap.values(); // [Map Iterator] { 500, 350, 45, 5 }
recipeMap.entries();
// [Map Iterator] {
  // [ 'cucumber', 500 ],
  // [ 'tomatoes', 350 ],
  // [ 'onion', 45 ],
  // [ 'orange', 5 ]
// }

// === Map has a built-in forEach method, similar to Array: ===
recipeMap.forEach((val, key) => {
  console.log(val + ': ' + key);
});

