import React, { Component } from 'react';
import json101hero from './definitions/101Hero.def.json';


export default class PrinterCard extends Component {
  render() {
    let styles = {
      hideOverflow: {overflow: 'hidden'},
      printerImage: {height: 200, overflow: 'hidden'},
      printerDescription: {width: 250, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'},
      definitionButton: {width: '100%', marginTop: 15}
    };

    return (
      <div className="col s12 m4">

        <div id={this.props.alt} className="modal bottom-sheet">
          <div className="modal-content">
            <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
            <p><pre>{JSON.stringify(json101hero, null, 2) }</pre></p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>

        <div className="card">
          <div className="card-image" style={styles.hideOverflow}>
            <img src={this.props.image} alt={this.props.alt} style={styles.printerImage} />
          </div>
          <div className="card-content">
            <a href={this.props.link} className="card-title">{this.props.name}</a>
            <p style={styles.printerDescription}>{this.props.description}</p>
            <a className="waves-effect waves-light btn modal-trigger" href={'#' + this.props.alt} style={styles.definitionButton}>see definition</a>
          </div>
        </div>
      </div>
    );
  }
}
