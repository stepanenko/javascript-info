
const Redux = require('redux');

console.log(Redux);

function component() {
  const element = document.createElement('h2');
  element.innerHTML = 'Hello Redux';
  return element;
}

const root = document.getElementById('root');
root.appendChild(component());
