## Practicing different JS methods

### Some JS facts:

ES6 modules form their own file scope (as if the entire contents of the file were wrapped in a function).

Variables declared in a module are completely inaccessible from outside that module (unless they're `export`ed).

### Module scope

Before modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.

Exporting makes a function or object available to other modules. In the next example, I export a function from the sequence.js module file:

// in sequence.js
```
export { sequence, toList, take };
```
Importing makes a function or object, from other modules, available to the current module.
```
import { sequence, toList, toList } from "./sequence";
```
In a way, we can imagine a module as a self-executing function that takes the import data as inputs and returns the export data.

More on scope: https://www.freecodecamp.org/news/an-introduction-to-scope-in-javascript-cbd957022652/
