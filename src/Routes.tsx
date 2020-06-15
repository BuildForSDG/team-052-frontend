import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from './components/reports/Reports';
import CreateReport from './components/reports/CreateReport';
import Urls from './utils/Paths';
import Login from './components/auth/Login';
import CreateAdmin from './components/admin/CreateAdmin';
import { PrivateRoute } from './PrivateRoute';
import HomeReports from './components/reports/HomeReports';
import Report from './components/reports/Report';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path={Urls.AUTH_HOME} component={Reports} />
        <Route exact path={Urls.HOME} component={HomeReports} />
        <Route exact path={Urls.CREATE_REPORT} component={CreateReport} />
        <Route exact path={Urls.LOGIN} component={Login} />
        <PrivateRoute exact path={Urls.CREATE_ADMIN} component={CreateAdmin} />
        <PrivateRoute exact path={Urls.SINGLE_REPORT} component={Report} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
