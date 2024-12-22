# DOM manipulation

**Document Object Model (DOM)** is a tree-like structure that represents the hierarchy of HTML elements on a web page. Each element is represented as an object, allowing JavaScript to access and manipulate them.

**DOM manipulation** means dynamically interacting with and modifying the structure, style, and content of web pages.  

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
