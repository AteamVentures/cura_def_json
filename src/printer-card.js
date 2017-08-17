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
import jsonCartesio from './definitions/cartesio.def.json';
import jsonCreatableD3 from './definitions/creatable_d3.def.json';
import jsonCustom from './definitions/custom.def.json';
import jsonDeltaGo from './definitions/delta_go.def.json';
import jsonDeltabot from './definitions/deltabot.def.json';
import jsonFdmextruder from './definitions/fdmextruder.def.json';
import jsonFdmprinter from './definitions/fdmprinter.def.json';
import jsonFolgertechFt5 from './definitions/folgertech_FT-5.def.json';
import jsonGrrNeo from './definitions/grr_neo.def.json';
import jsonHelloBeePrusa from './definitions/helloBEEprusa.def.json';
import jsonInnovoInventor from './definitions/innovo_inventor.def.json';
import jsonJellybox from './definitions/jellybox.def.json';
import jsonJulia from './definitions/julia.def.json';
import jsonKosselMini from './definitions/kossel_mini.def.json';
import jsonKosselPro from './definitions/kossel_pro.def.json';
import jsonKupido from './definitions/kupido.def.json';
import jsonM180 from './definitions/m180.def.json';
import jsonMakerStarter from './definitions/maker_starter.def.json';
import jsonMakerbotReplicator from './definitions/makerbotreplicator.def.json';
import jsonMankatiFullscaleXtPlus from './definitions/mankati_fullscale_xt_plus.def.json';
import jsonMendel90 from './definitions/mendel90.def.json';
import jsonOrd from './definitions/ord.def.json';
import jsonPrintrbotPlay from './definitions/printrbot_play.def.json';
import jsonPrintrbotPlayHeated from './definitions/printrbot_play_heated.def.json';
import jsonPrintrbotSimple from './definitions/printrbot_simple.def.json';
import jsonPrintrbotSimpleExtended from './definitions/printrbot_simple_extended.def.json';
import jsonPrusaI3 from './definitions/prusa_i3.def.json';
import jsonPrusaI3Mk2 from './definitions/prusa_i3_mk2.def.json';
import jsonPrusaI3Xl from './definitions/prusa_i3_xl.def.json';
import jsonPunchtecConnectXl from './definitions/punchtec_connect_xl.def.json';

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
      'bq_witbox_2.def.json': jsonBqWitbox2,
      'cartesio.def.json': jsonCartesio,
      'creatable_d3.def.json': jsonCreatableD3,
      'custom.def.json': jsonCustom,
      'delta_go.def.json': jsonDeltaGo,
      'deltabot.def.json': jsonDeltabot,
      'fdmextruder.def.json': jsonFdmextruder,
      'fdmprinter.def.json': jsonFdmprinter,
      'folgertech_FT-5.def.json': jsonFolgertechFt5,
      'grr_neo.def.json': jsonGrrNeo,
      'helloBEEprusa.def.json': jsonHelloBeePrusa,
      'innovo_inventor.def.json': jsonInnovoInventor,
      'jellybox.def.json': jsonJellybox,
      'julia.def.json': jsonJulia,
      'kossel_mini.def.json': jsonKosselMini,
      'kossel_pro.def.json': jsonKosselPro,
      'kupido.def.json': jsonKupido,
      'm180.def.json': jsonM180,
      'maker_starter.def.json': jsonMakerStarter,
      'makerbotreplicator.def.json': jsonMakerbotReplicator,
      'mankati_fullscale_xt_plus.def.json': jsonMankatiFullscaleXtPlus,
      'mendel90.def.json': jsonMendel90,
      'ord.def.json': jsonOrd,
      'printrbot_play.def.json': jsonPrintrbotPlay,
      'printrbot_play_heated.def.json': jsonPrintrbotPlayHeated,
      'printrbot_simple.def.json': jsonPrintrbotSimple,
      'printrbot_simple_extended.def.json': jsonPrintrbotSimpleExtended,
      'prusa_i3.def.json': jsonPrusaI3,
      'prusa_i3_mk2.def.json': jsonPrusaI3Mk2,
      'prusa_i3_xl.def.json': jsonPrusaI3Xl,
      'punchtec_connect_xl.def.json': jsonPunchtecConnectXl
    };
    return jsonDict[definition];
  }

  renderJsonTableRow(attributeName, attributeValue) {
    return (
      <tr key={(Math.random()).toString()}>
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
            tableRows.push(this.renderJsonTableRow(keyPrefix, defJson[key].toString()));
            break;
          }
          this.traverseJson(tableRows, defJson[key], key + ' ');
        } else {
          if (key === "default_value") {
            tableRows.push(this.renderJsonTableRow(keyPrefix, defJson[key].toString()));
          } else {
            tableRows.push(this.renderJsonTableRow(keyPrefix + key, defJson[key].toString()));
          }
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
