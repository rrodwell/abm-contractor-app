import React, { Component } from 'react';
import { NavbarComponent } from './subcomponents'
class App extends Component {
  render() {
    return (
      <div id='main-section'>
        <NavbarComponent />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
