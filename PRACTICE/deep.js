
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

mergeDeep(this, { a: { b: { c: 123 } } });
// or
const merged = mergeDeep({ a: 1 }, { b: { c: { d: { e: 12345 } } } });
const merged2 = mergeDeep({ a: { a: 1 } }, { a: { b: 1 } });

console.log(merged);   // { a: 1, b: { c: { d: [Object] } } }
console.log(merged2);   // { a: { a: 1, b: 1 } }


// Merge a `source` object to a `target` recursively
const merge = (target, source) => {
  // Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target) Object.assign(source[key], merge(target[key], source[key]))
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source)
  return target
}

const merged3 = merge({ a: 1 }, { b: { c: { d: { e: 12345 } } } });
const merged4 = merge({ a: { a: 1 } }, { a: { b: 1 } });
console.log(merged3);   // { a: 1, b: { c: { d: [Object] } } }
console.log(merged4);   // { a: { a: 1, b: 1 } }
