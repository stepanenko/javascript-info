# JS Modules (CommonJS, AMD, UMD)

Modules allow developers to encapsulate functionality, manage dependencies, and promote code reusability. Here’s a concise overview of the main module systems: CommonJS, AMD, and UMD.

## CommonJS (CJS)
CommonJS is primarily used in Node.js for server-side JavaScript. It allows developers to define modules using the `module.exports` syntax.
Modules are loaded synchronously, which is suitable for server environments but can be problematic in browsers where loading times may vary. The `require()` function is used to import modules.

Example:
```javascript
// math.js
function add(x, y) {
    return x + y;
}
module.exports = { add };

// main.js
const math = require('./math');
console.log(math.add(2, 3)); // Outputs: 5
```
