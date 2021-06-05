
// Try in Nodejs:

// Context is related to objects. It refers to the object within the function being executed.
// `this` refers to the object that the function is executing in:

const a = 20;

function gx() {
  return this;
}

function fx() {
  return this.a;
}

function fy() {
  return global.a;
}

// in browser there is no 'global' but 'window', so globalThis === window

console.log(gx() === global);  // true
console.log(globalThis === global);  // true
console.log(gx() === this);  // false
console.log(fx());  // 20 or undefined if 'strict mode'
console.log(fy());  // 20 or undefined if 'strict mode'
console.log(global);  // Object [global]; no such thing as 'global' in browsers
console.log(globalThis);  // Object [global]; but Window in browser

// `this` is determined by how a function is invoked.
// When a function is called as a method of an object, this is set to the object the method is called on:

const o = {
  prop: 37,
  f: function () {
    return this.prop;
  }
};

console.log(o.f());  // 37


function fx() {
  return this;
}

var obj = {
  method: function () {
    return this;
  }
};

var x_obj = {
  y_obj: {
    method: function () {
      return this;
    }
  }
};

console.log(fx() === globalThis);
// => True
console.log(obj.method() === globalThis);
// => False
console.log(obj.method() === obj);
// => True
console.log(x_obj.y_obj.method() === x_obj)
// => False
