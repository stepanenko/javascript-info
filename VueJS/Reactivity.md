## Reactivity in VueJS



The `Set` approach doesn't work because Vue's reactivity system doesn't track changes made to `Set` methods like `add()` and `delete()`.

Vue can detect changes to:

- Array methods that mutate the array (push, pop, shift, unshift, splice)
- Object property assignments
- Direct value assignments to reactive properties

Here's how we could make the Set approach work by forcing reactivity:

```ts
export class MyComponent {
  private openCards: Set<string> = new Set();
  private forceUpdate: number = 0; // Trigger reactive updates

  public toggleCardContent(cardId: string): void {
    if (this.openCards.has(cardId)) {
      this.openCards.delete(cardId);
    } else {
      this.openCards.add(cardId);
    }
    // Force reactive update
    this.forceUpdate++;
  }

  public isCardOpen(cardId: string): boolean {
    return this.openCards.has(cardId);
  }
}
```

While `Set` operations are more efficient (O(1) vs O(n) for array operations), the lack of built-in reactivity support makes arrays a more practical choice in Vue components unless you implement a reactive wrapper.

Key points:

- Sets have better performance for lookup/add/delete
- Arrays have native Vue reactivity support
- Sets would need extra code to trigger updates
- Arrays are more commonly used in Vue
- The performance difference is negligible for small collections

Given these tradeoffs, using an array is probably the better choice here for maintainability and simplicity.
