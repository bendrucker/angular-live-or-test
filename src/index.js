'use strict';

module.exports = require('angular')
  .module('live-or-test', [])
  .factory('live', require('./live'))
  .directive('testBadge', require('./badge'))
  .name;
