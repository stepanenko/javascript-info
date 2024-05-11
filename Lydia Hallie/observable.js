class Observable {
  constructor() {
    this.observers = [];
  }
  
  subscribe(f) {
    this.observers.push(f);
  ｝
    
  unsubscribe(f) {
    this.observers = this.observers.filter(subscriber => subscriber !== f);
  }
    
  notify(data) {
    this.observers.forEach(observer => observer (data)) ;
  }
}

export default new Observable();

// Usage:
  
function handleClick() {
  observable.notify("User clicked button!");
｝
  
function handleToggle() {
  observable.notify("User toggled switch!");
｝
  
function logger (data) {
  console. log(`${Date.now()} ${data}`);
}
  
function toastify(data) {
  toast(data, {
    position: toast.POSITION.BOTTOM_RIGHT,
    closeButton: false,
    autoClose: 2000,
  });
｝

observable.subscribe(logger);
observable.subscribe(toastify);

export default function App() {
  return (
    <div className="App">
      <Button variant="contained" onClick={handleClick}>
        Click me!
      </Button>
      <FormControlLabel
        control={<Switch name="" onChange={handleToggle} />}
        label="Toggle me"
      />
    </div>
    <ToastContainer />
}
