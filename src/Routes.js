import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './Components/App';
import Navbar from './Components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;