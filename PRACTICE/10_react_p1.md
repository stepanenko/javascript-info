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
