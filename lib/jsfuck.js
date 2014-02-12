var jsfuck = require('jsfuck');
var through = require('through2');
var merge = require('deepmerge');
var err = require('./error.js');

module.exports = function (opt) {
  function fuck (file, encoding, done) {
    if (file.isNull()) {
      this.push(file);
      done();
      return;
    }
    if (file.isStream()) {
      done(err('Streaming is not supported'));
      return;
    }
    var fucked;
    var options = merge(opt || {}, {
      fromString: true,
      output: {}
    });
    try {
      fucked = jsfuck.JSFuck.encode(String(file.contents), false);
      file.contents = new Buffer(fucked);
      this.push(file);
    } catch (e) {
      console.warn('jsfuck error: ' + e.message + ' in ' + file.path + '. Returning unfucked code.');
      this.push(file);
    }
    done();
  }
  return through.obj(fuck);
};
