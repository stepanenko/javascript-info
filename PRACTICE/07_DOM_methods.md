# DOM manipulation

DOM manipulation refers to the process of interacting with and changing the structure, content, or style of a web page's Document Object Model (DOM) using JavaScript.
The DOM is a tree-like representation of a web page's structure, where each node represents an HTML element, attribute, or text content.

Here are the common methods for DOM manipulation:

- Selecting Elements:

```js
document.getElementById()
document.querySelector()
document.querySelectorAll()
document.getElementsByClassName()
document.getElementsByTagName()
```

- Changing Content:

```js
element.innerHTML
element.textContent
```

- Modifying Attributes:

```js
element.setAttribute()
element.getAttribute()
element.removeAttribute()
```

- Changing Styles:
```js
element.style
element.classList.add()
element.classList.remove()
element.classList.toggle()
```

- Creating and Removing Elements:
```js
document.createElement()
element.appendChild()
element.remove()
```

- Event Handling:
```js
element.addEventListener()
```

- Traversing the DOM:
```js
element.parentElement
element.children
element.nextElementSibling
element.previousElementSibling
```
