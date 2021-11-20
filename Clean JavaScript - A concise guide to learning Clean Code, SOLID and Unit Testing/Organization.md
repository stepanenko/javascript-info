# Organization

Classes should start with a list of variables. If there are public constants, they should
appear first. After that, come the private static variables and then the private instance
variables; if we use public instance variables, these should be last.

Public methods or functions should follow the list of variables. To do this we will
start with the constructor method. If a named constructor is used, it would go first
and then the private constructor method would follow that. Then we will put the
static functions of the class and, if you have related private methods, they go next.
Then the rest of the instance methods would go in order of importance from the
highest to the lowest, leaving the accessors (getters and setters) to the end.

For this example we will use a small class built with Typescript, since it makes it
easier for us to set methods and private variables:

```typescript
class Post {
  private title: string;
  private content: number;
  private createdAt: number;

  static create(title: string, content: string) {
    return new Post(title, content);
  }

  private constructor(title: string, content: string) {
    this.setTitle(title);
    this.setContent(content);
    this.createdAt = Date.now();
  }

  setTitle(title: string) {
    if (StringUtils.isNullOrEmpty(title)) throw new Error(‘Title cannot be empty’);

    this.title = title;
  }
 
  setContent(content: string) {
    if (StringUtils.isNullOrEmpty((content)) throw new Error(‘Content cannot be empty’);

    this.content = content;
  }

  getTitle() {
    return this.title;
  }

  getContent() {
    return this.content;
  }
}
```
