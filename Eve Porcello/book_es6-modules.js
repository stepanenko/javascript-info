
// A JavaScript module is a piece of reusable code that can easily be incorporated
// into other JavaScript files without causing variable collisions.
// JavaScript modules are stored in separate files, one file per module.

// Both `export` and `export default` can be used on any JavaScript type:
// primitives, objects, arrays, and functions.

export default new Expedition("Mt. Freel", 2, ["water", "snack"]);

import { print, log } from "./text-helpers";
import freel from "./mt-freel";
import { print as p, log as l } from "./text-helpers";
import * as fns from './text-helpers';


// This import and export syntax is not yet fully supported by all browsers or by Node.
// But it’s supported by Babel so you can use these statements in your source code and Babel will know
// where to find the modules you want to include in your compiled JavaScript.
