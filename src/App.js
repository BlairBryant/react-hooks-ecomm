import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import ProductDetail from './components/ProductDetail';

const App = () => (
    <Switch>
      <Route exact path='/'  render={(props) => {
        return <Home />
      }} />
      <Route path='/admin/add' component={AddProduct} />
      <Route path='/admin/:id' component={EditProduct} />
      <Route path='/product/:id' component={ProductDetail} />
    </Switch>
)

export default App;