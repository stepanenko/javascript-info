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
  
