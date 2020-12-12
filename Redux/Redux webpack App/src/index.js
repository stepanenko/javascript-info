
const Redux = require('redux');
import './style.css';
import { CounterButton } from './components/Button';
import TitleComponent from './components/Title';

const initialState = { value: 0 };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, value: state.value + 1 };
    case 'DECREMENT':
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = Redux.createStore(reducer);

const RenderCounter = () => {
  const box = document.createElement('p');
  box.innerHTML = store.getState().value;

  store.subscribe(() => {
    const state = store.getState();
    box.innerHTML = state.value;
  });
  return box;
};

function increment() {
  store.dispatch({ type: 'INCREMENT' });
}

function decrement() {
  store.dispatch({ type: 'DECREMENT' });
}

const root = document.getElementById('root');
root.appendChild(TitleComponent());
root.appendChild(RenderCounter());
root.appendChild(CounterButton('INCREMENT', increment));
root.appendChild(CounterButton('DECREMENT', decrement));
