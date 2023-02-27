import './App.css';

//components
import Store from './components/Store';

//API
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
          <Store />
      </ProductContextProvider>
      
    </div>
  );
}

export default App;
