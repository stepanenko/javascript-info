Functions can be adopted for various **contexts** and **scope** can be encapsulated and preserved. These concepts are behind some of the most powerful design patterns JavaScript has to offer.

Every function invocation has both a **scope** and a **context** associated with it. Fundamentally, **scope** is function-based while **context** is object-based. **Scope** pertains to the variable access of a function when it is invoked and is unique to each invocation. **Context** is always the value of the `this` keyword, which is a reference to the object that "owns" the currently executing code.

### Context

**Context** is most often determined by how a function is invoked. When a function is called as a method of an object, **this** is set to the object the method is called on. When called as an unbound function, **this** will default to the **global context** or **window** object in the browser. However, if the function is executed in strict mode, the **context** will default to `undefined`.

### Closures

A **closure** is formed when a nested function is made accessible outside of the function in which it was defined, so that it may be executed after the outer function has returned. It maintains access to the local variables, arguments, and inner function declarations of its outer function. Encapsulation allows us to hide and preserve the execution context from outside **scopes** while exposing a public interface.

### Call and Apply

These two simple methods, inherent to all functions, allow you to execute **(call/apply)** any function in any desired **context**.

### Bind

It is used for manipulating **context**. It ++returns++ a new function that is ++permanently bound++ to the first argument of **bind** regardless of how the function is being used. It works by using a **closure** that is responsible for ++redirecting++ the call in the appropriate **context**.

### Lexical Environment

The word Lexical means related to something. Lexical Environment means how and where your code is physically written.

### This

In JavaScript, we use `this` as a shortcut, a reference. It refers to objects, variables and we use it in context. Context is related to objects. It refers to the object within the function being executed. `this` refers to the object that the function is executing in:
```
const a = 20;

function gx() {
    return this;
}

function fx() {
    return this.a;
}

function fy() {
    return window.a;
}

console.log(gx() === window);  // True
console.log(fx());  // 20 or undefined if 'strict mode'
console.log(fy());  // 20 or undefined if 'strict mode'
```

`this` is determined by how a function is invoked.

When a function is called as a method of an object, this is set to the object the method is called on:
```
const o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f());  // 37
```
