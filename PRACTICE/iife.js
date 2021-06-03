
(function () {

    function foo(a, b) {
        return bar(a, b);
    }

    function bar(a, b) {
        return a + b;
    }

    console.log(foo(1, 2));   // 3

}());

// The self-executing function serves only to contain and protect the foo() and bar() functions,
// but more importantly, the anonymous function executes only once —
// thus the inner foo() and bar() functions are created only once.
