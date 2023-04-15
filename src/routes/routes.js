import React from 'react';
import {
  BrowserRouter,
  Routes as Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from '../components/home/home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={ <Home /> } />
      { /* <Route path="" element={<BookListByCollection />} /> */ }
    </Switch>
  </BrowserRouter>
);

export default Routes;
