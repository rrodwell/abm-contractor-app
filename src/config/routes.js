import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../components/App';
import Home from '../components/pages/Home';
import Csv from '../components/pages/Csv';

const routes = (
  <Router>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/upload' component={Csv} />
    </App>
  </Router>
);

export default routes;