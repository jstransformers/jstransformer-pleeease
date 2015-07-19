'use strict';

var Pleeease = require('pleeease')

exports.name = 'pleeease'
exports.inputFormats = ['pcss', 'pleeease']
exports.outputFormat = 'css'

exports.render = function (str, options) {
  return Pleeease.process(str, options || {})
}
