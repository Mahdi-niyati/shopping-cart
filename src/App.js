import './App.css';
import { Switch , Route , Redirect } from 'react-router-dom';

//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

//API
import ProductContextProvider from './context/ProductContextProvider';


function App() {
  return (
    <div className="App">
      <ProductContextProvider>
         <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products"  />
         </Switch>
      </ProductContextProvider>
      
    </div>
  );
}

export default App;
