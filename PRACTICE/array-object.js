
// Case 1
const bgEnabled = { ics: false, ae: true, mop: true, loyalty: false };
const bgExisting = [
  { id: "5", key: "flag", metadata: "LOYALTY", value: 3 },
  { id: "41", key: "lyl_flag", metadata: "MOP", value: 2 },
  { id: "23", key: "l_flag", metadata: "ICS", value: 1 }
];

const error = bgExisting.filter(el => bgEnabled[el.metadata.toLowerCase()]);


// Case 2
// ==== Code to optimize ====
// for (let i = 1; i <= res[0].max; i++) {
//   let obj = {};
//   obj.name = 'Top ' + i + ' Box';
//   obj.value = i;
//   vm.allLevels.push(obj);
// }
const res = [{ max: 6 }];

let option1 = [...Array(res[0].max)].map((el, index) => ({ name: `Top ${index} Box`, value: index + 1 }));

let option2 = Array.from({ length: res[0].max }, (elem, index) => ({ name: `Top ${index + 1} Box`, value: index + 1 }));



const allLevels = [
  { name: 'Average', value: 0 },
  ...option2,
  { name: 'Bottom 1 Box', value: -1 },
  { name: 'Bottom 2 Box', value: -2 }
];

console.log(allLevels);