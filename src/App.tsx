import { Route, Switch } from 'react-router';
import CategoryList from './pages/CategoryList';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route 
          path='/'
          component={CategoryList}
          exact
        />
        <Route 
          path='/product'
          component={ProductDetails}
        />
    </Switch>
    </div>
  );
}

export default App;
