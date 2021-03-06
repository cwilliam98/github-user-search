import React from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './core/components/Navbar';
import { Home } from './pages/Home';
import { Search } from './pages/Search';

export const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
    </Switch>
  </BrowserRouter>
);
