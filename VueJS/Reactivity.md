## Reactivity in VueJS

The example code that shows reactivity issue and not working functionality as a result:
```ts
export class MyComponent {
  private openCards: Set<string> = new Set();

  public toggleStep(cardId: string): void {
    if (this.openCards.has(cardId)) {
      this.openCards.delete(cardId);
    } else {
      this.openCards.add(cardId);
    }
  }

  public isCardOpen(cardId: string): boolean {
    return this.openCards.has(cardId);
  }
}
```

The `Set` approach doesn't work because Vue's reactivity system doesn't track changes made to `Set` methods like `add()` and `delete()`.

### Vue can detect changes to:

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

### Key points:

- Sets have better performance for lookup/add/delete
- Arrays have native Vue reactivity support
- Sets would need extra code to trigger updates
- Arrays are more commonly used in Vue
- The performance difference is negligible for small collections

Given these tradeoffs, using an array is probably the better choice here for maintainability and simplicity.

### Fix using `Vue.set()`

```ts
export class MyComponent {
  private openCards: Record<string, boolean> = {};

  public toggleStep(cardId: string): void {
    // Use Vue.set to ensure reactivity
    Vue.set(this.openCards, cardId, !this.openCards[cardId]);
  }

  public isStepOpen(cardId: string): boolean {
    return !!this.openCards[cardId];
  }
}
```

### Key points:

The issue might be related to Vue's reactivity system not detecting nested property changes. Let's modify the code to ensure Vue picks up the changes by using Vue's reactivity system properly:

````typescript
@inject
@needs(SectionHeader)
export class GroupSection {
  private openSteps: Record<string, boolean> = {};

  constructor(readonly currentApplicationStore: CurrentApplicationStore) {}

  public attached() {
    // Initialize all steps closed
    this.stepList?.forEach(step => {
      Vue.set(this.openSteps, step.Id, false);
    });
  }

  public toggleStep(stepId: string): void {
    // Use Vue.set to ensure reactivity
    Vue.set(this.openSteps, stepId, !this.openSteps[stepId]);
  }

  public isStepOpen(stepId: string): boolean {
    return !!this.openSteps[stepId];
  }

  // ...existing code...
}
````

Key changes:
- Using `Vue.set()` to add reactive properties
- This ensures Vue's reactivity system properly tracks nested object changes
- Changed from array to the object-based approach for efficiency
