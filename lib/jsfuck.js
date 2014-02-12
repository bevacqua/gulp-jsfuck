var jsfuck = require('jsfuck');
var through = require('through2');
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
