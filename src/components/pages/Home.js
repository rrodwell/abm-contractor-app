import React, { Component } from 'react';
import { CenterDiv, NavbarComponent, CardComponent, SquareButton } from '../subcomponents';
import { Row, Col, Breadcrumb, MenuItem } from "react-materialize";

class Home extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
        <div className="container-93">
          <h1>hi</h1>
        </div>
    )}
  };

export default Home;