import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../components/App';
import HelloWorld from '../components/pages/HelloWorld';

const routes = (
  <Router>
    <App>
      <Route exact path='/' component={HelloWorld} />
    </App>
  </Router>
);

export default routes;