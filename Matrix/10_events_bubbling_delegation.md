# Event handling, bubbling & delegation

## Event handler
**Event handler** is a function that gets executed when a specific event occurs. These handlers are attached to HTML elements and are responsible for executing code in response to user actions.

## Event listeners
**Event listeners** are functions that wait for an event to occur on a specific element. They are added using methods like `addEventListener()`, which allows multiple handlers for the same event type on the same element.

```js
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    alert('Button clicked!');
});
```

`removeEventListener(event, handler)` - removes an event handler that was previously attached using `addEventListener()`. This is important for performance and memory management.

## Event Object

When an event occurs, JavaScript creates an event object that contains information about the event. This object is automatically passed to the event handler function and includes properties such as:
- `event.type`: The type of event (e.g., "click").
- `event.target`: The element that triggered the event.
- `event.currentTarget`: The element to which the event listener is attached.
- `event.preventDefault()`: Prevents the default action associated with the event (e.g., stopping form submission).
- `event.stopPropagation()`: Stops the event from bubbling up to parent elements.

### Notice

- Manage event bubbling: Be aware of how events bubble up through the DOM. Use `stopPropagation()` if you want to prevent parent elements from receiving the same event.
- Prevent default behavior when necessary: Use `preventDefault()` in cases where you want to override default browser actions (like preventing a form from submitting).

### Example

```html
<button id="myButton">Click me!</button>
<script>
    const button = document.getElementById('myButton');
    button.addEventListener('click', function(event) {
        alert('Button was clicked!');
        console.log('Event type:', event.type);
        console.log('Target element:', event.target);
    });
</script>
```

## Event Bubbling

Event bubbling is a way that events (like clicks or key presses) move through the elements in an HTML document. When an event happens in a specific element (like a button), it first affects that element and then moves up to its parent elements, triggering any event listeners attached to those parents. This process is called “bubbling” because it starts at the bottom (the innermost element) and bubbles up to the top (the outer elements).

### Order of Execution
When an event occurs:
- The event handler for the innermost (target) element is executed first.
- Then, the event bubbles up to its parent element, executing any attached handlers there.
- This process continues until it reaches the outermost element or the document object.

For example, if you have nested elements like `<form>`, `<div>`, and `<p>`, clicking on the `<p>` will trigger handlers in this order:  
1. `<p>`'s handler 2. `<div>`'s handler 3. `<form>`'s handler

### Default Behavior
Event bubbling is the default behavior for most events in JavaScript. This means that unless explicitly prevented, events will bubble up through the DOM hierarchy.

### Stopping Event Bubbling
You can stop the bubbling process using `event.stopPropagation()`. This method prevents the event from reaching any parent elements, which can be useful when you want to isolate event handling for a specific element.

### Use Cases
Event bubbling is useful for:
- Event Delegation: By attaching a single event listener to a parent element instead of multiple listeners to child elements, you can manage events more efficiently. This technique takes advantage of bubbling since events will propagate up to the parent where they can be handled.
- Dynamic Elements: When new elements are added to the DOM dynamically, they can still respond to events without needing separate listeners for each new element.
