## Q: Given the following object, delete prop `salary`

```ts
interface Employee {
  id: number;
  name: string;
  salary: number;
}

const obj: Employee = {
  id: 1,
  name: "Tom Howard",
  salary: 300,
};
```

### A:
```ts
// If you try to remove a property that has not been marked as optional, you'd get an error:
delete obj["salary"]; // Error: The operand of a 'delete' operator must be optional.ts(2790)

// 1 - change "salary" to optional and then use "delete"

// 2 - use utility type Partial to construct a new type before using the "delete" operator:
const obj: Partial<Employee> = { ... };
delete obj["salary"]; // Works

// 3 - use utility types Partial, Pick and Omit to construct a new type before using the "delete" operator:
const obj: Partial<Pick<Employee, "salary">> & Omit<Employee, "salary"> = {
  id: 1,
  name: "Tom Howard",
  salary: 300,
};
```

## Bonus Q: What is the opposite to `Partial<Type>`

### A: `Required<Type>`

`Required<Type>` constructs a type consisting of all properties of `Type` set to required.
