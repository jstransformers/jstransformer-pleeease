'use strict'

const Pleeease = require('pleeease')
const extend = require('extend-shallow')

exports.name = 'pleeease'
exports.inputFormats = ['pcss', 'pleeease']
exports.outputFormat = 'css'

exports.renderAsync = function (str, options, locals) {
  return Pleeease.process(str, extend({}, options, locals))
}
