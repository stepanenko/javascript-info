// Composition Example (Concatenative inheritance)
// You can inherit just the stuff you really need using object composition:

const distortion = { distortion: 1 };
const volume = { volume: 1 };
const cabinet = { cabinet: 'maple' };
const lowCut = { lowCut: 1 };
const inputLevel = { inputLevel: 1 };

const GuitarAmp = (options) => {
  return Object.assign({}, distortion, volume, cabinet, options);
};

const BassAmp = (options) => {
  return Object.assign({}, lowCut, volume, cabinet, options);
};

const ChannelStrip = (options) => {
  return Object.assign({}, inputLevel, lowCut, volume, options);
};

const gAmp = GuitarAmp();
console.log(gAmp);

const cs = ChannelStrip({ extra: 'things' });
console.log(cs);

// With composition we choose which objects get which properties.
// When you inherit from a class, you get everything, even if you don’t want it.

console.log('=====');

// OR, my version:
const GuitarAmp2 = (options) => {
  return { ...distortion, ...volume, ...cabinet, ...options };

};

const BassAmp2 = (options) => {
  return { ...lowCut, ...volume, ...cabinet, ...options };
};

const ga = GuitarAmp2();
console.log('ga', ga);

const ba = BassAmp2({ extra: 'things' });
console.log('ba', ba);
