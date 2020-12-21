
import './App.css';
import Header from './components/header';
import StoreContext from './storeContext';
import { store } from './store/store';

function App() {
  return (
    <StoreContext.Provider value={store}>
      <Header />
    </StoreContext.Provider>
  );
}

export default App;
