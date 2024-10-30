# React part 1

Q1: Build a React component called `ModalDialog` with the text `Hello World` and a `Close dialog` button.  
Additional task: add a class `"modal-dialog"`  
A1:
```jsx
export const ModalDialog = ({ onClose }) => {
  return (
    <div className="modal-dialog">
      <div>Hello World</div>
      <div>
        <Button onClick={onClose}>Close dialog</Button>
      </div>
    </div>
  );
};
```
---
Q2: Build another React component called `App` where the previously created `ModalDialog` component is added.  
A2:
```jsx
export const App = () => {
  return (
    <ModalDialog />
  );
};
```
---
Q3: Add a button that would open the `ModalDialog` component.  
A3:
```jsx
export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="layout">
      <Button onClick={() => setIsOpen(true)}>
        Open dialog
      </Button>
      {isOpen ? <ModalDialog onClose={() => setIsOpen(false)} /> : null}
    </div>
  );
}
```
---
