import React, { Component } from 'react';
import PrinterCards from './printer-cards';
import DefinitionBuilder from './definition-builder';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="blue">
          <div className="nav-wrapper">
            <a href="" className="brand-logo center white-text">CuraEngine Support</a>
          </div>
        </nav>

        <div style={{padding: 10}}>
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s6"><a href="#compatible-printers" className="active">Compatible Printers</a></li>
                <li className="tab col s6"><a href="#definition-creator">Definition Creator</a></li>
              </ul>
            </div>
            <div id="compatible-printers" className="col s12">
              <PrinterCards />
            </div>
            <div id="definition-creator" className="col s12">
              <DefinitionBuilder />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
