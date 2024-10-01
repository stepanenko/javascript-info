# Function Context

### Summary:  

The context of a function is the value of this inside the function.  
`this` depends on how the function is invoked:
- In the global scope, it refers to the global object (window).
- As a method of an object, it refers to that object.
- In a constructor, it refers to the new instance.
- In an arrow function, it inherits the surrounding context.
- Event handlers typically bind this to the event target.

---
### Arrow Function Context

Q_1: What will be in the console?

```js
const obj = {
  name: 'Object',
  showName: () => {
    console.log(this.name);
  }
};
obj.showName();
```

A_1: arrow functions do not have their own `this` context; instead, they inherit `this` from the surrounding (lexical) scope.  
In this case, the outer scope is likely the global object (or `undefined` in strict mode), not the `obj` object itself.

---
Q_2: How to fix so that `'Object'` is printed?

A_2: By changing `showName` to a regular function, `this` inside the function now refers to the object `obj`, so `this.name` will correctly print `'Object'`.

### Event Handler Context

Q_3: What will be in the console?
```js
document.querySelector('button').addEventListener('click', function() {
  console.log(this);
});
```
A_3: When used as an event handler, `this` typically refers to the DOM element that fired the event.
