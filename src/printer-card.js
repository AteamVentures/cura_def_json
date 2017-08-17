import React, { Component } from 'react';
import json101hero from './definitions/101Hero.def.json';
import jsonAbaxPri3 from './definitions/abax_pri3.def.json';
import jsonAbaxPri5 from './definitions/abax_pri5.def.json';
import jsonAbaxTitan from './definitions/abax_titan.def.json';

export default class PrinterCard extends Component {
  renderJson(definition) {
    let jsonDict = {
      '101Hero.def.json': json101hero,
      'abax_pri3.def.json': jsonAbaxPri3,
      'abax_pri5.def.json': jsonAbaxPri5,
      'abax_titan.def.json': jsonAbaxTitan
    };
    return JSON.stringify(jsonDict[definition], null, 2);
  }

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
            <pre>
              { this.renderJson(this.props.definition) }
            </pre>
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
