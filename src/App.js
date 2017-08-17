import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">Waggle Supported Printers</a>
          </div>
        </nav>

        <div className="row">

          <div className="col s12 m4">
            <div className="card">
              <div className="card-image">
                <img src="https://ksr-ugc.imgix.net/assets/012/448/495/76b683af750992235b6b21e9bea30409_original.jpg?crop=faces&w=1552&h=873&fit=crop&v=1463761646&auto=format&q=92&s=614afeba75c9f295fdf0bc3c940adaa1" alt="101Hero" />
                <a href="printer-pages/101Hero.html" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
              </div>
              <div className="card-content">
                <a href="http://www.101hero.com/" className="card-title">101Hero</a>
                <p>3D Printing for work, home and play. 101Hero gives everyone simple, affordable, and dependable 3D printing.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
