
const catCreator = require('./cats');

const zelda = catCreator.createCat('Zelda');
console.log(zelda); // { name: 'Zelda', funnyName: '^^Zelda^^' }

const frida = catCreator.createCat('Frida');
console.log(frida); // { name: 'Frida', funnyName: '^^Frida^^' }
