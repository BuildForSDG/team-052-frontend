import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from './components/reports/Reports';
import CreateReport from './components/reports/CreateReport';
import Urls from './utils/Paths';
import Login from './components/auth/Login';
import CreateAdmin from './components/admin/CreateAdmin';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Urls.AUTH_HOME} component={Reports} />
        <Route exact path={Urls.CREATE_REPORT} component={CreateReport} />
        <Route exact path={Urls.LOGIN} component={Login} />
        <Route exact path={Urls.CREATE_ADMIN} component={CreateAdmin} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
