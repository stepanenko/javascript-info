# TypeScript

1. How to type this array?
```ts
let pizza: any;
pizza = ["Pepperoni", 20, true];

// answer:
let pizza: [string, number, boolean];  // tuple
```

2. Add type for `pizza`.
```ts
let pizza: any;
pizza = {
  name: "Pepperoni",
  price: 25,
  getName() {
    return pizza.name;
  }
}

// answer:
let pizza: { name: string; price: number; getName(): string };
```

3. Add type for `size` and function `selectSize`.
```ts
// we have three sizes: small, medium and large
let pizzaSize = "small";
const selectSize = (size) => {
  pizzaSize = size;
};

// answer:
type Size = "small" | "medium" | "large";
type Callback = (size: Size) => void;
let pizzaSize: Size = "small";
const selectSize: Callback = (x) => {
  pizzaSize = x;
};
```
