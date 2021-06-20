import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';
import Navbar from './Components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
