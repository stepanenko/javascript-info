
// input
const cities = ["paris", "sirap", "rapsi", "london", "onlond", "oslo", "ools", "lviv"];

// output
// [['paris', 'sirap', 'rapsi'], ['london', 'onlond'], ['oslo', 'ools'], ['lviv']]

function groupCities(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let group = [arr[i]];
    let sortedCity = [...arr[i]].sort().join('');
    for (let k = i + 1; k < arr.length; k++) {
      if (sortedCity === [...arr[k]].sort().join('')) {
        group.push(arr[k]);
        i++;
      }
    }
    result.push(group)
  }
  return result;
}

console.log('RES', groupCities(cities));

