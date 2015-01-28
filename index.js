exports.build = function(dir) {
  var
    _ = require('lodash'),
    fs = require('fs'),
    path = require('path'),
    config = {},
    files = fs.readdirSync(dir);
  files.forEach(function(file) {
    if(/.*\.json$/.exec(file)) {
      var file_path = path.join(__dirname, dir, file);
      config[_.trim(file, '.json')] = require(file_path);
    }
  });
  return config;
};
