# TypeScript

1. How to type this array?
```ts
let array: any;
array = ["Pepperoni", 20, true];
// answer: [string, number, boolean] <- tuple
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
// answer: { name: string; price: number; getName(): string } 
```
