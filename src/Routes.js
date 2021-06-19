import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './Components/App';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;