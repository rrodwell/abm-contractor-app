import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../components/App';
import Home from '../components/pages/Home';

const routes = (
  <Router>
    <App>
      <Route exact path='/' component={Home} />
    </App>
  </Router>
);

export default routes;