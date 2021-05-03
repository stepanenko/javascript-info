
// Global/Window Binding
// If this is invoked at the top level scope,
// it will be assigned with the global/window object:

function useThis() {
  console.log(this);
}

useThis(); //=> window in the browser, global in Node
