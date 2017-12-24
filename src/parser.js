const fs = require('fs')

const parseFile = fileName => {
  let json = require(`./definitions/${fileName}.def.json`)

  const editStartEndGcode = gcode => `"${gcode}"`
  const checkIfStartEndGcode = (key, json, valueType) => {
    if (key === 'machine_start_gcode' || key === 'machine_end_gcode') {
      return editStartEndGcode(json.overrides[key][valueType])
    } else return json.overrides[key][valueType]
  }

  const editBooleanString = value => {
    if (value === 'True') return true
    else if (value === 'False') return false
    else return value
  }

  for (let key in json.overrides) {
    if (json.overrides[key]['default_value'] && json.overrides[key]['value']) console.log('good to go')
    else if (json.overrides[key]['default_value']) {
      json.overrides[key]['default_value'] = editBooleanString(json.overrides[key]['default_value'])
      json.overrides[key]['default_value'] = checkIfStartEndGcode(key, json, 'default_value')
      json.overrides[key]['value'] = json.overrides[key]['default_value']
    } else if (json.overrides[key]['value']) {
      json.overrides[key]['value'] = editBooleanString(json.overrides[key]['value'])
      json.overrides[key]['value'] = checkIfStartEndGcode(key, json, 'value')
      json.overrides[key]['default_value'] = json.overrides[key]['value']
    }

    if (json.overrides[key]['default_value'] === false && json.overrides[key]['value'] === false) {
      console.log('a false value was found and is good to go')
    } else if (json.overrides[key]['default_value'] === false) {
      json.overrides[key]['value'] = false
    } else if (json.overrides[key]['value'] === false) {
      json.overrides[key]['default_value'] = false
    }
  }

  const jsonStr = JSON.stringify(json, null, 4)
  fs.writeFile(`./definitions/${fileName}.def.json`, jsonStr, 'utf8', () => console.log('Write complete'))
}

const fileNames = [
  '101Hero',
  '3dator',
  'abax_pri3',
  'abax_pri5',
  'abax_titan',
  'alya3dp',
  'bfb',
  'bq_hephestos',
  'bq_hephestos_2',
  'bq_hephestos_xl',
  'bq_witbox',
  'bq_witbox_2',
  'builder_premium_large',
  'builder_premium_medium',
  'builder_premium_small',
  'cartesio',
  'creality_cr10',
  'creality_cr10s4',
  'creality_cr10s5',
  'creatable_d3',
  'custom',
  'dagoma_discoeasy200',
  'delta_go',
  'deltabot',
  'deltacomb',
  'easyarts_ares',
  'fabtotum',
  'fdmextruder',
  'fdmprinter',
  'folgertech_FT-5',
  'grr_neo',
  'helloBEEprusa',
  'imade3d_jellybox',
  'innovo_inventor',
  'jellybox',
  'julia',
  'kemiq_q2_beta',
  'kemiq_q2_gama',
  'kossel_mini',
  'kossel_pro',
  'kupido',
  'm180',
  'makeR_pegasus',
  'makeR_prusa_tairona_i3',
  'makeit_pro_l',
  'makeit_pro_m',
  'maker_starter',
  'makerbotreplicator',
  'mankati_fullscale_xt_plus',
  'mendel90',
  'ord',
  'peopoly_moai',
  'printrbot_play',
  'printrbot_play_heated',
  'printrbot_simple',
  'printrbot_simple_extended'
]

for (let fileName of fileNames) {
  console.log(fileName)
  parseFile(fileName)
}
