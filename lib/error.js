'use strict';

var PluginError = require('gulp-util/lib/PluginError');

module.exports = function () {
  var args = [].concat(null, 'gulp-jsfuck', Array.prototype.slice.call(arguments));
  var Factory = PluginError.bind.apply(PluginError, args);
  return new Factory();
};
