import React, { Component } from 'react';
import PrinterCards from './printer-cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="" className="brand-logo center white-text">CuraEngine Supported</a>
          </div>
        </nav>
        <PrinterCards />
      </div>
    );
  }
}

export default App;
