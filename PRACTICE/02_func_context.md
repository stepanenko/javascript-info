# Function Context

### Summary:  

The context of a function is the value of this inside the function.  
`this` depends on how the function is invoked:
- In the global scope, it refers to the global object (window).
- As a method of an object, it refers to that object.
- In a constructor, it refers to the new instance.
- In an arrow function, it ignores the scope and refers to the next context.
- Event handlers typically bind this to the event target.

---
### Arrow Function Context

Q1: What will be in the console?
```js
onst pizza = {
  name: 'Blazing Inferno',
  showName: function() {
    setTimeout(function() {
      console.log(this);
    }, 100);
  }
};
pizza.showName();
```
A1: `Timeout { ... }`

Q2: What will be in the console?
```js
const pizza = {
  name: "Blazing Inferno",
  getName: function() {
    console.log(this);
  }
};
pizza.getName();
```
A2:
```js
{ name: 'Blazing Inferno', getName: [Function: getName] }
```

Q3: What will be in the console?

```js
const pizza = {
  name: 'Blazing Inferno',
  showName: () => {
    console.log(this.name);
  }
};
pizza.showName();
```

A3: `undefined` will be printed.  
Arrow functions do not have their own `this` context; instead, they inherit `this` from the surrounding (lexical) scope.  
In this case, the outer scope is likely the global object (or `undefined` in strict mode), not the `pizza` object itself.

---
Q4: How to fix so that `'Blazing Inferno'` is printed?

A4: By changing `showName` to a regular function, `this` inside the function now refers to the object `pizza`, so `this.name` will correctly print `'Blazing Inferno'`.

### Event Handler Context

Q5: What will be in the console?
```js
document.querySelector('button').addEventListener('click', function() {
  console.log(this);
});
```
A5: When used as an event handler, `this` typically refers to the DOM element that fired the event.
