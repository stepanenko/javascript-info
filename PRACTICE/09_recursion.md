# Recursion

**Recursion** is a programming technique where a function calls itself to solve a problem.
It typically breaks a problem into smaller subproblems, eventually reaching a base case to terminate the recursion.

Key Components of Recursion:
- **Base Case**: The condition under which the recursive function stops calling itself. This prevents infinite recursion and eventual stack overflow.
- **Recursive Case**: The part of the function where the function calls itself with a modified argument, gradually approaching the base case.

Example 1 - Factorial Calculation:
```js
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Outputs: 120
```

Example 2 - Fibonacci Sequence:
```js
function fibonacci(n) {
  // Base cases: return n for 0 and 1
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Recursive case: sum of the two preceding numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // Outputs: 5 (0, 1, 1, 2, 3, 5)
```

Advantages of Recursion:
- **Simplicity**: Recursive solutions can be more straightforward and easier to read than their iterative counterparts, especially for problems that have a naturally recursive structure (like tree traversals).

Disadvantages of Recursion:
- **Performance**: Recursive functions can lead to stack overflow errors if the recursion depth is too high. Each function call adds to the call stack, consuming memory.
- **Overhead**: Recursive calls may introduce overhead due to function calls and can be less efficient than iterative solutions.
