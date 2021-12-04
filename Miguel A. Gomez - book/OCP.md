# OCP

In cases where new behaviors are introduced into existing systems, instead of modifying
old components, new components should be created. The reason is that if those
components or classes are being used in another part (of the same project or of others)
we will be altering their behavior and thus could cause unwanted effects.

## Applying OCP

There are several ways of applying OCP. One could be to use extension mechanisms, such as inheritance or composition.
And you should try to prioritize composition over inheritance.
I think a good context to illustrate how to apply the OCP might be to try to decouple dependent things:

Here we are skipping the OCP, since if we wanted to replace the library axios for another, like fetch,
we would have to modify the class. To solve these problems we are going to use the **adapter pattern.**
