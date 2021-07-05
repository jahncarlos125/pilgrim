import { useState } from 'react';
import { Route, Switch } from 'react-router';
import CategoryList from './pages/CategoryList';
import ProductDetails from './pages/ProductDetails';
import { Product } from './shared/interfaces';


function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product>({
    id: 0,
    title: '',
    cover_path: '',
    author: '',
    publisher: '',
    format_type: 'audiobook'
  });

  return (
    <div className="App">
      <Switch>
        <Route 
          path='/'
          render={() => (
            <CategoryList setSelectedProduct={setSelectedProduct}/>
          )}
          exact
        />
        <Route 
          path='/product/:id'
          render={() => (
            <ProductDetails selectedProduct={selectedProduct}/>
          )}
        />
    </Switch>
    </div>
  );
}

export default App;
