**Interpreter** is a computer program that directly executes instructions written in a programming or scripting language without requiring them previously to have been compiled into a machine language program. It translates one Statement at a time.

**Compiler** is computer software that transforms computer code written in one programming language (the source language, like JavaScript, etc.) into another programming language (the target language, like machine code).

In JavaScript, the source code typically goes through the following **phases** before it is executed:

- **Tokenizing** - breaking up a source code string into meaningful chunks called **Tokens**.
- **Parsing** - here Syntax Parser takes the array of **Tokens** as input and turns it into an **Abstract Syntax Tree (AST)**.
- **Code Generation** - here the **AST** is used as input and an executable byte-code is generated. Byte-code is then refined by the optimizing **JIT (Just-In-Time)** compiler.

Does JavaScript really Compiles? The answer is a loud YES. After the compilation process produces a binary byte code, the **JS virtual machine (e.g. V8)** executes it.

More: https://softwareengineeringdaily.com/2018/10/03/javascript-and-the-inner-workings-of-your-browser/
