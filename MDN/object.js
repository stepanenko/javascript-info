
let obj = {
  name: 'Jack',
  phone: 0555642234
};

let entries = Object.entries(obj);   // [ [ 'name', 'Jack' ], [ 'phome', 95896732 ] ]

for (const [key, value] of entries) {
  console.log(key + ' : ' + value);
}

let freez = Object.freeze(obj);
obj.gender = 'male';   // no effect
obj.name = 'David';   // no effect

// check support at https://kangax.github.io/compat-table/es2016plus/
// let fromObj = Object.fromEntries(entries);   // not supported in node < 12.11
// fromObj: {name: "Jack", phome: 95896732}


