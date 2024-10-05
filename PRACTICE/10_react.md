# React

Q1: Use `useEffect` to fetch some data from some API

A1:
```jsx
function DataFetchingComponent() {
  const [data, setData] = useState(null); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json(); // Parse the JSON response
        setData(result); // Update state with the fetched data
      } catch (err) {
        setError(err); // Set error if the fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData(); // Call the fetch function
  }, []); // Empty dependency array to run effect only on mount

  // Render loading, error, or fetched data
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display fetched data */}
    </div>
  );
}
```

## `useRef`

The `useRef` hook is a built-in hook in React that allows you to create a mutable object which holds a `.current` property.
This property can store a value that persists across renders without causing a re-render when it changes.

Key Features of `useRef`:
- Persistent Storage: The value assigned to `ref.current` persists for the full lifetime of the component.
- No Re-render: Changing the `current` property of a `ref` does not trigger a re-render of the component, making it suitable for storing values that do not affect rendering.
- Accessing DOM Elements: `useRef` is commonly used to access and interact with DOM elements directly, allowing for imperative operations.

Q2: Use `useRef` to focus an input field when a button is clicked:  
A2:
```jsx
function FocusInput() {
  const inputRef = useRef(null); // Create a ref to hold the input element

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focus the input element
    }
  };

  return (
    <div>
      <input
        ref={inputRef} // Attach the ref to the input element
        type="text"
        placeholder="Click the button to focus me"
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```

## `useReducer`

The `useReducer` hook is a built-in React hook that helps manage complex state logic in a component.
It is an alternative to `useState` and is particularly useful when dealing with state transitions that involve multiple sub-values or when the next state depends on the previous one.

Key Features of `useReducer`:
- **State Management**: Allows managing more complex state logic than useState, making it suitable for applications with multiple related state variables.
- **Reducer Function**: Based on the Redux pattern, you define a reducer function that takes the current state and an action to return the new state.
- **Dispatching Actions**: You can dispatch actions to trigger state changes, promoting a clearer flow of state transitions.

When to use `useReducer`:
- **Complex State Logic**: When managing state with complex interactions or multiple sub-values that need to be updated based on different actions.
- **Performance Optimization**: When passing state down to deeply nested components, since useReducer can help avoid prop drilling by keeping state management localized.
- **Cleaner Code**: When the logic of state updates is better expressed in a function than in multiple state variables, promoting more readable and maintainable code.

Q3: Use `useReducer` for managing a counter:  
A3:
```jsx
// Define the initial state
const initialState = { count: 0 };

// Define the reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }; // Increment count
    case 'decrement':
      return { count: state.count - 1 }; // Decrement count
    case 'reset':
      return initialState; // Reset count to initial state
    default:
      throw new Error(); // Handle unknown action type
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState); // Use useReducer

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}
```
