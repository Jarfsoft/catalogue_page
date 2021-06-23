import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Containers/Home';
import PokemonDetails from './Containers/PokemonDetails';
import Navbar from './Components/Navbar';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/pokemon/:id"><PokemonDetails /></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
