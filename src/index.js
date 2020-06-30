import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Routes from './Routes';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context/AppState';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
