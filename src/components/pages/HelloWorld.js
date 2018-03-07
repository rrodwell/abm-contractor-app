import React, { Component } from 'react';


class HelloWorld extends Component {
  constructor() {
    super();

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render () {
    return (
        <div className="container-93">
            <h1>Hello World!</h1>
        </div>
    )}
  };

export default HelloWorld;