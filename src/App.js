import React, { Component } from 'react';
import PrinterCards from './printer-cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="teal lighten-1">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Waggle Supported Printers</a>
          </div>
        </nav>

        <PrinterCards />

      </div>
    );
  }
}

export default App;
