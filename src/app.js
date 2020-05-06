import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import OldReports from './components/OldReports';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from './components/Reports';

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Reports} />
      </Switch>
  );
}

export default App;
