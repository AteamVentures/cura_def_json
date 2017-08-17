import React, { Component } from 'react';
import json101hero from './definitions/101Hero.def.json';
import jsonAbaxPri3 from './definitions/abax_pri3.def.json';
import jsonAbaxPri5 from './definitions/abax_pri5.def.json';
import jsonAbaxTitan from './definitions/abax_titan.def.json';
import jsonBfb from './definitions/bfb.def.json';
import jsonBqHephestos from './definitions/bq_hephestos.def.json';
import jsonBqHephestos2 from './definitions/bq_hephestos_2.def.json';
import jsonBqHephestosXl from './definitions/bq_hephestos_xl.def.json';
import jsonBqWitbox from './definitions/bq_witbox.def.json';
import jsonBqWitbox2 from './definitions/bq_witbox_2.def.json';

export default class PrinterCard extends Component {
  renderJson(definition) {
    let jsonDict = {
      '101Hero.def.json': json101hero,
      'abax_pri3.def.json': jsonAbaxPri3,
      'abax_pri5.def.json': jsonAbaxPri5,
      'abax_titan.def.json': jsonAbaxTitan,
      'bfb.def.json': jsonBfb,
      'bq_hephestos.def.json': jsonBqHephestos,
      'bq_hephestos_2.def.json': jsonBqHephestos2,
      'bq_hephestos_xl.def.json': jsonBqHephestosXl,
      'bq_witbox.def.json': jsonBqWitbox,
      'bq_witbox_2.def.json': jsonBqWitbox2
    };
    return jsonDict[definition];
  }

  renderJsonTableRow(attributeName, attributeValue) {
    return (
      <tr key={attributeName + attributeValue}>
        <td className="blue-text text-darken-2">{attributeName}</td>
        <td>{attributeValue}</td>
      </tr>
    );
  }

  traverseJson(tableRows, defJson, keyPrefix = '') {
    for (var key in defJson) {
      if (defJson.hasOwnProperty(key)) {
        if (typeof defJson[key] === 'object') {
          if (key === "default_value") {
            tableRows.push(this.renderJsonTableRow(keyPrefix + key, defJson[key].toString()));
            break;
          }
          this.traverseJson(tableRows, defJson[key], key + ' ');
        } else {
          tableRows.push(this.renderJsonTableRow(keyPrefix + key, defJson[key].toString()));
        }
      }
    }
  }

  renderJsonTable(defJson) {
    let tableRows = [];
    this.traverseJson(tableRows, defJson);

    return (
      <table>
        <thead>
          <tr>
            <th>Attribute</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>
    );
  }

  render() {
    let styles = {
      hideOverflow: {overflow: 'hidden'},
      printerImage: {height: 200, overflow: 'hidden'},
      printerDescription: {width: 250, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'},
      definitionButton: {width: '100%', marginTop: 15},
      definitionButtonLower: {width: '100%', marginTop: 5}
    };

    return (
      <div className="col s12 m4">

        <div id={'formatted-' + this.props.alt} className="modal bottom-sheet">
          <div className="modal-content">
            <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
            {this.renderJsonTable(this.renderJson(this.props.definition))}

          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>

        <div id={this.props.alt} className="modal bottom-sheet">
          <div className="modal-content">
            <h4>{this.props.name}</h4>
            <p>{this.props.description}</p>
            <pre>
              { JSON.stringify(this.renderJson(this.props.definition), null, 2) }
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
            <a className="waves-effect waves-light btn modal-trigger blue" href={'#formatted-' + this.props.alt} style={styles.definitionButton}>formatted definition</a>
            <a className="waves-effect waves-light btn modal-trigger" href={'#' + this.props.alt} style={styles.definitionButtonLower}>raw definition</a>
          </div>
        </div>
      </div>
    );
  }
}
