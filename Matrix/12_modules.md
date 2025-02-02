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

## Asynchronous Module Definition (AMD)

AMD is designed for asynchronous loading of modules in the browser environment. It allows developers to define modules and their dependencies without blocking the execution of other scripts. Uses `define()` to declare a module and its dependencies, and `require()` to load them. Supports parallel loading of modules, improving performance for web applications.

Example:
```javascript
// Define a module
define(['dependency'], function(dependency) {
    // Module code here
    return {
        greet: function() {
            console.log('Hello from AMD!');
        }
    };
});

// Load a module
require(['myModule'], function(myModule) {
    myModule.greet(); // Outputs: Hello from AMD!
});
```
