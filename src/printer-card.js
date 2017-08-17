import React, { Component } from 'react';

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
        <div className="card">
          <div className="card-image" style={styles.hideOverflow}>
            <img src={this.props.image} alt={this.props.alt} style={styles.printerImage} />
          </div>
          <div className="card-content">
            <a href={this.props.link} className="card-title">{this.props.name}</a>
            <p style={styles.printerDescription}>{this.props.description}</p>
            <button className="waves-effect waves-light btn" style={styles.definitionButton}>see definition</button>
          </div>
        </div>
      </div>
    );
  }
}
