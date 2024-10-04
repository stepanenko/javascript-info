Q_1: Get a button from HTML, attach an event handler to it and print the target element?  
A_1:
```js
const button = document.getElementById('btn');

button.addEventListener('click', (e) => {
  console.log('Target', e.target)
});
```
