
## What’s the Difference Between a Factory and a Constructor?

Constructors force callers to use the `new` keyword. Factories don’t.
That’s it, but that has some relevant side-effects.

#### So what does the `new` keyword do?

1. Instantiates a new instance object and binds `this` to it within the constructor.
2. Binds `instance.__proto__` to `Constructor.prototype`.
3. As a side-effect of 2, binds `instance.__proto__.constructor` to `Constructor`.
4. Implicitly returns `this`, which refers to `instance`.

> Note: We’ve used `instance` to refer to the newly created instance, and `Constructor` to refer to the constructor function or class that created the instance.

### Benefits of Constructors & `class`:

1. Most books teach you to use class or constructors.
2. `this` refers to the new object.
3. Some people like the way `myFoo = new Foo()` reads.
4. There may be a micro-optimization performance benefit, but you should not worry about that unless you have profiled your code and proven that it’s an issue for you.
