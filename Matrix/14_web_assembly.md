
# WebAssembly (Wasm)

**WebAssembly (Wasm)** is a binary format that allows code from languages like C, C++, and Rust to run in web browsers and other environments with near-native performance. It's compact, secure, and portable, making it ideal for high-performance applications like gaming, media processing, scientific computing, and machine learning.

**WebAssembly** is a new type of code that can be run in modern web browsers and provides new features and major gains in performance. It is not primarily intended to be written by hand, rather it is designed to be an effective compilation target for source languages like C, C++, Rust, etc.

### Goals

- Be fast, efficient, and portable — **WebAssembly** code can be executed at near-native speed across different platforms by taking advantage of common hardware capabilities.
- Be readable and debuggable — WebAssembly is a low-level assembly language, but it does have a human-readable text format (the specification for which is still being finalized) that allows code to be written, viewed, and debugged by hand.
- Keep secure — **WebAssembly** is specified to be run in a safe, sandboxed execution environment. Like other web code, it will enforce the browser's same-origin and permissions policies.
- Don't break the web — **WebAssembly** is designed so that it plays nicely with other web technologies and maintains backwards compatibility.

**WebAssembly** enhances web capabilities by bringing native performance to web applications.

More: https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Concepts

## WebAssembly and JavaScript

**WebAssembly** is a different language from JavaScript, but it is not intended as a replacement. Instead, it is designed to complement and work alongside JavaScript, allowing web developers to take advantage of both languages' strong points. **WebAssembly** integrates well with existing JavaScript frameworks that enhances performance for computation-heavy tasks.

### Key Integration Points

- Loading and Instantiating Wasm Modules:

**WebAssembly** modules are loaded into JavaScript applications using the **WebAssembly** API, which includes methods like `WebAssembly.instantiate()` for compiling and executing Wasm code.

- Shared Functionality:

**WebAssembly** exposes its functions to JavaScript, allowing developers to call Wasm functions directly from JavaScript code. This enables frameworks like React, Vue, or Angular to leverage Wasm for specific high-performance tasks while retaining JavaScript's flexibility.

- Accessing Web APIs:

Since **WebAssembly** cannot directly interact with the DOM or other browser APIs, JavaScript serves as a bridge, handling tasks like DOM manipulation and event handling while delegating computation-heavy operations to **WebAssembly**.

- Thread-Safe Operations:

**WebAssembly** modules can be shared across Web Workers without recompilation, enabling true multithreaded applications when combined with JavaScript frameworks.

#### Seamless Integration Without Low-Level Knowledge
You don't need to know how to write WebAssembly code to benefit from it. WebAssembly modules can be imported into web or Node.js applications, exposing their functions for use via JavaScript. This allows JavaScript frameworks to leverage WebAssembly for significant performance improvements and new capabilities while keeping the functionality accessible to web developers.

#### JavaScript as the Control Layer
JavaScript maintains complete control over how WebAssembly code is downloaded, compiled, and executed. This means developers can think of WebAssembly as a powerful JavaScript feature - one that efficiently generates high-performance functions on demand.

#### Future: Native Module Loading
In the future, WebAssembly modules will be loadable just like ES modules using `<script type='module'>`. This will enable JavaScript to fetch, compile, and import WebAssembly modules as seamlessly as it does with ES modules.

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
- Using **AssemblyScript** which looks similar to TypeScript and compiles to WebAssembly binary
    - **AssemblyScript** compiles a strict variant of TypeScript to WebAssembly, allowing web developers to keep using TypeScript-compatible tooling they are familiar with — such as Prettier, ESLint, VS Code IntelliSense, etc. You can check its documentation on https://www.assemblyscript.org
