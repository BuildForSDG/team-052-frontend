import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from './components/Reports';
import CreateReport from './components/CreateReport';
import Urls from './utils/Paths';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Urls.HOME} component={Reports} />
        <Route exact path={Urls.CREATE_REPORT} component={CreateReport} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
