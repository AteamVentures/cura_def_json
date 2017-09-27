/* @flow */

import React, { Component } from 'react';

export default class DefinitionAttribute extends Component<any> {
  constructor(props: any) {
    super(props)
  }

  render() {
    let styles = {

    };

    return (
      <div className="input-field col s12 m6">
        <input id={this.props.id} type={this.props.type} className="validate"/>
        <label for={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}
