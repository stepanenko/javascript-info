
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

WebAssembly integrates with existing JavaScript frameworks that enhances performance for computation-heavy tasks.

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
