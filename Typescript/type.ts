
// Type keyword in typescript:
// In TS the type keyword defines an alias to a type. We can also use the type keyword to define user defined types.

// Example:

type Age = number | string;    // pipe means number OR string
type color = "blue" | "red" | "yellow" | "purple";
type random = 1 | 2 | 'random' | boolean;

// random and color refer to user defined types, so type madness can contain anything which
// within these types + the number 3 and string 'foo'
type madness = random | 3 | 'foo' | color;  

type error = Error | null;
type callBack = (err: error, res: color) => random;

// You can compose types of scalar types (string, number, etc), but also of literal values like 1 or 'mystring'.
// You can even compose types of other user-defined types. For example type madness has the types random and color in it.


// TS docs: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases
