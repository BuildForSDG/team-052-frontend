import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OldReports from './components/Reports';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reports from './components/RSReports';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Reports} />
      <Route exact path="/reports" component={OldReports} />
    </Switch>
  );
}

export default App;
