import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Reports from './components/Reports';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Switch>
          <Route exact path="/" component={Reports} />
    </Switch>
  );
}

export default App;
