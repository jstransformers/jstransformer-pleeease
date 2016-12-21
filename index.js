'use strict'

var Pleeease = require('pleeease')
var extend = require('extend-shallow')

exports.name = 'pleeease'
exports.inputFormats = ['pcss', 'pleeease']
exports.outputFormat = 'css'

exports.renderAsync = function (str, options, locals) {
  return Pleeease.process(str, extend({}, options, locals))
}
