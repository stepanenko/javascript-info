
import './App.css';
import Header from './components/header';
import StoreContext from './storeContext';

let store = {
  tweets: ['tweet 1', 'tweet 2']
};

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Header />
    </StoreContext.Provider>
  );
}

export default App;
