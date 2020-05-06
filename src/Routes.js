import { Route, Switch } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from './components/Reports';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Reports} />
    </Switch>
  );
};

export default Routes;
