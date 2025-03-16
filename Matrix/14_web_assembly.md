
# WebAssembly (Wasm)

WebAssembly (Wasm) is a binary format that allows code from languages like C, C++, and Rust to run in web browsers and other environments with near-native performance. It's compact, secure, and portable, making it ideal for high-performance applications like gaming, media processing, scientific computing, and machine learning.

WebAssembly is a new type of code that can be run in modern web browsers and provides new features and major gains in performance. It is not primarily intended to be written by hand, rather it is designed to be an effective compilation target for source languages like C, C++, Rust, etc.

### Goals

- Be fast, efficient, and portable — WebAssembly code can be executed at near-native speed across different platforms by taking advantage of common hardware capabilities.
- Be readable and debuggable — WebAssembly is a low-level assembly language, but it does have a human-readable text format (the specification for which is still being finalized) that allows code to be written, viewed, and debugged by hand.
- Keep secure — WebAssembly is specified to be run in a safe, sandboxed execution environment. Like other web code, it will enforce the browser's same-origin and permissions policies.
- Don't break the web — WebAssembly is designed so that it plays nicely with other web technologies and maintains backwards compatibility.

WebAssembly enhances web capabilities by bringing native performance to web applications.

More: https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Concepts

## WebAssembly and JavaScript

WebAssembly is a different language from JavaScript, but it is not intended as a replacement. Instead, it is designed to complement and work alongside JavaScript, allowing web developers to take advantage of both languages' strong points. WebAssembly integrates well with existing JavaScript frameworks that enhances performance for computation-heavy tasks.

### Key Integration Points

- Loading and Instantiating Wasm Modules:

WebAssembly modules are loaded into JavaScript applications using the WebAssembly API, which includes methods like `WebAssembly.instantiate()` for compiling and executing Wasm code.

- Shared Functionality:

WebAssembly exposes its functions to JavaScript, allowing developers to call Wasm functions directly from JavaScript code. This enables frameworks like React, Vue, or Angular to leverage Wasm for specific high-performance tasks while retaining JavaScript's flexibility.

- Accessing Web APIs:

Since WebAssembly cannot directly interact with the DOM or other browser APIs, JavaScript serves as a bridge, handling tasks like DOM manipulation and event handling while delegating computation-heavy operations to WebAssembly.

- Thread-Safe Operations:

WebAssembly modules can be shared across Web Workers without recompilation, enabling multithreaded applications in conjunction with JavaScript frameworks.

You don't even have to know how to create WebAssembly code to take advantage of it. WebAssembly modules can be imported into a web (or Node.js) app, exposing WebAssembly functions for use via JavaScript. JavaScript frameworks could make use of WebAssembly to confer massive performance advantages and new features while still making functionality easily available to web developers.

Since JavaScript has complete control over how WebAssembly code is downloaded, compiled and run, JavaScript developers could even think of WebAssembly as just a JavaScript feature for efficiently generating high-performance functions.

In the future, WebAssembly modules will be loadable just like ES modules (using <script type='module'>), meaning that JavaScript will be able to fetch, compile, and import a WebAssembly module as easily as an ES module.

### Examples:

```js
const wasmBinary = new Uint8Array([
    0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00, 0x01, 0x07, 0x01,
    0x60, 0x02, 0x7f, 0x7f, 0x01, 0x7f, 0x03, 0x02, 0x01, 0x00, 0x07,
    0x07, 0x01, 0x03, 0x61, 0x64, 0x64, 0x00, 0x00, 0x0a, 0x09, 0x01,
    0x07, 0x00, 0x20, 0x00, 0x20, 0x01, 0x6a, 0x0b
]);

let add; // Will hold our WebAssembly function

// Initialize WebAssembly module
WebAssembly.instantiate(wasmBinary)
    .then(obj => {
      add = obj.instance.exports.add;
    });

add(5, 7);  // 12
```

## Using WebAssembly

There are four main entry points:
- Porting a C/C++ application with Emscripten
- Writing or generating WebAssembly directly at the assembly level
- Writing a Rust application and targeting WebAssembly as its output
- Using AssemblyScript which looks similar to TypeScript and compiles to WebAssembly binary
