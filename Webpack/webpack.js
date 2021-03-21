
// Regular code:
var array = [];
for (var i = 0; i < 20; i++) {
  array[i] = i;
}

// Minified by hand:
for(var a=[i=0];++i<20;a[i]=i);

// Source: https://blog.logrocket.com/uglify-vs-babel-minify-vs-terser-a-mini-battle-royale/
