const fs = require('fs')
const printerName = 'mendel90'
let json = require(`./definitions/${printerName}.def.json`)

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
}

const jsonStr = JSON.stringify(json, null, 4)
fs.writeFile(`./definitions/${printerName}.def.json`, jsonStr, 'utf8', () => console.log('Write complete'))
