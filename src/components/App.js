import React, { Component } from 'react';
// import { NavbarComponent } from './subcomponents'
import NavbarComponent from './subcomponents/NavbarComponent';
class App extends Component {

  render() {
    return (
      <div className='container' id='main-section'>
        <NavbarComponent />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default App;
