import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../hoc/Layout/Layout';
import Auth from '../Containers/Auth/Auth';
import AddItem from '../Containers/AddItem/AddItem';
import ListItem from '../Containers/ListItem/ListItem';
import ItemCard from '../ItemCard/ItemCard';
import Registration from '../Containers/Auth/Registration';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path='/login' component={Auth} />
          <Route path='/registration' component={Registration} />
          <Route path='/item-creator' component={AddItem} />
          <Route path='/item/:id' component={ItemCard} />
          <Route path='/item' component={ItemCard} />
          <Route path='/' component={ListItem} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
