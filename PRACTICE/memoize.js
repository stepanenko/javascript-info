
// ==== Memoization: ====
// • Technique used to avoid unnecessary invocation of an expensive function
// • Based on the principle of referential transparency
// • Only applies to pure functions
// • Implemented using a simple caching layer

Function.prototype.memoized = function () {
  let key = JSON.stringify(arguments);
  this._cache = this._cache || {};
  this._cache[key] = this._cache[key] || this.apply(this, arguments);

  return this._cache[key];
};

Function.prototype.memoize = function () {
  let fn = this;
  if (fn.length === 0 || fn.length > 1) {
    return fn;
  }

  return function () {
    return fn.memoized.apply(fn, arguments);
  };
};

const md5 = (function (str) {
  // some expensive algorithm here...
  let j = [];
  for (let i = 1; i < 1000000; i++) {
    j.push(i * 12345);
  }
  return 'some result';
}).memoize();

let str = "OO in the large, functional in the small";

console.time('not cached');
md5(str);   // 20.390ms
console.timeEnd('not cached');

console.time('cached');
md5(str);   // 0.040ms
console.timeEnd('cached');
