/* @flow */

import React, { Component } from 'react';

import DefinitionAttribute from './definition-attribute';

type Attribute = {
  id: string,
  type: string,
  label: string
};

export default class DefinitionBuilder extends Component<any> {
  constructor(props: any) {
    super(props)
  }

  renderAttributes(attributeArray: Array<Attribute>): Array<any> {
    return (
      attributeArray.map(function(attribute: Attribute, i: number) {
        return <DefinitionAttribute
          id={attribute.id}
          type={attribute.type}
          label={attribute.label}/>
      })
    );
  }

  render() {
    let styles = {

    };

    let attributesGeneral: Array<Attribute> = [
      {id: 'id', type: 'text', label: 'id'},
      {id: 'name', type: 'text', label: 'name'},
      {id: 'version', type: 'number', label: 'version'}
    ];

    // machine_extruder_trains was ommitted
    let attributesMetadata: Array<Attribute> = [
      {id: 'type', type: 'text', label: 'type'},
      {id: 'author', type: 'text', label: 'author'},
      {id: 'category', type: 'text', label: 'category'},
      {id: 'manufacturer', type: 'text', label: 'manufacturer'},
      {id: 'setting_version', type: 'number', label: 'setting_version'},
      {id: 'file_formats', type: 'text', label: 'file_formats'},
      {id: 'visible', type: 'checkbox', label: 'visible'},
      {id: 'has_materials', type: 'checkbox', label: 'has_materials'},
      {id: 'preferred_material', type: 'text', label: 'preferred_material'},
      {id: 'preferred_quality', type: 'text', label: 'preferred_quality'}
    ];

    let attributesMachineSettings: Array<Attribute> = [
      {id: 'machine_name', type: 'text', label: 'machine_name'},
      {id: 'machine_show_variants', type: 'checkbox', label: 'machine_show_variants'},
      {id: 'machine_start_gcode', type: 'text', label: 'machine_start_gcode'},
      {id: 'machine_end_gcode', type: 'text', label: 'machine_end_gcode'},
      {id: 'material_guid', type: 'text', label: 'material_guid'},
      {id: 'material_bed_temp_wait', type: 'checkbox', label: 'material_bed_temp_wait'}
    ];

    return (
      <div>
        <div className="row">
          <form className="col s12">

            <div className="row">

              <div className="card">
                <div className="card-content">
                  <span className="card-title">General Information</span>
                  <div className="row">
                  {this.renderAttributes(attributesGeneral)}
                  </div>
                </div>
              </div>

            </div>

            <div className="row">

              <div className="card">
                <div className="card-content">
                  <span className="card-title">General Information</span>
                  <div className="row">
                  {this.renderAttributes(attributesMetadata)}
                  </div>
                </div>
              </div>

            </div>

            <div className="row">

              <div className="card">
                <div className="card-content">
                  <span className="card-title">General Information</span>
                  <div className="row">
                  {this.renderAttributes(attributesMachineSettings)}
                  </div>
                </div>
              </div>

            </div>

          </form>
        </div>
      </div>
    );
  }
}
