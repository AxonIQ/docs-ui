'use strict'

module.exports = (val) => {
  console.log('Parsing: ' + val)
  try {
    return JSON.parse(val)
  } catch (e) {
    return undefined
  }
}
