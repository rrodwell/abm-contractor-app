import React from 'react';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';
import App from './../components/App';
import { Home, HelloWorld } from './../components/pages';

const routes = (
  <Router>
    <App>
      <Route exact path='/' component={HelloWorld} />
    </App>
  </Router>
);

export default routes;