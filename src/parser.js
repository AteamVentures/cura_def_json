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

  const editNumericString = value => {
    if (typeof value === 'string' && !isNaN(value)) return parseFloat(value)
    else return value
  }

  const editNestedString = value => {
    if (typeof value === 'string' && value.indexOf("'") !== -1) return value.replace(/'/g, '')
    else return value
  }

  for (let key in json.overrides) {
    if (json.overrides[key]['default_value'] && json.overrides[key]['value']) console.log('good to go')
    else if (json.overrides[key]['default_value']) {
      json.overrides[key]['default_value'] = editNestedString(json.overrides[key]['default_value'])
      json.overrides[key]['default_value'] = editNumericString(json.overrides[key]['default_value'])
      json.overrides[key]['default_value'] = editBooleanString(json.overrides[key]['default_value'])
      json.overrides[key]['default_value'] = checkIfStartEndGcode(key, json, 'default_value')
      json.overrides[key]['value'] = json.overrides[key]['default_value']
    } else if (json.overrides[key]['value']) {
      json.overrides[key]['value'] = editNestedString(json.overrides[key]['value'])
      json.overrides[key]['value'] = editNumericString(json.overrides[key]['value'])
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

    if (json.overrides[key]['default_value'] === 0 && json.overrides[key]['value'] === 0) {
      console.log('a false value was found and is good to go')
    } else if (json.overrides[key]['default_value'] === 0) {
      json.overrides[key]['value'] = 0
    } else if (json.overrides[key]['value'] === 0) {
      json.overrides[key]['default_value'] = 0
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
  'printrbot_simple_extended',
  'prusa_i3_mk2',
  'prusa_i3_xl',
  'prusa_i3',
  'punchtec_connect_xl',
  'raise3D_N2_dual',
  'raise3D_N2_plus_dual',
  'raise3D_N2_plus_single',
  'raise3D_N2_single',
  'renkforce_rf100',
  'rigid3d_3rdgen',
  'rigid3d_hobby',
  'rigid3d_zero',
  'rigid3d_zero2',
  'rigid3d',
  'rigidbot_big',
  'rigidbot',
  'robo_3d_r1',
  'tam',
  'tevo_tarantula',
  'ultimaker_original_dual',
  'ultimaker_original_plus',
  'ultimaker_original',
  'ultimaker',
  'ultimaker2_extended_plus',
  'ultimaker2_extended',
  'ultimaker2_go',
  'ultimaker2_plus',
  'ultimaker2',
  'ultimaker3_extended',
  'ultimaker3',
  'uniqbot_one',
  'vertex_delta_k8800',
  'vertex_k8400_dual',
  'vertex_k8400',
  'zone3d_printer'
]

for (let fileName of fileNames) {
  console.log(fileName)
  parseFile(fileName)
}
