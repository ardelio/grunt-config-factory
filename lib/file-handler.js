var _ = require('lodash'),
    path = require('path');

module.exports = function(filePath) {
  var _public = {};

  var validExtensions = ['.js', '.json'];
  var extension = path.extname(filePath);
  var key = path.basename(filePath, extension);

  _public.isValid = function() {
    return _.findIndex(validExtensions, function(e) { return e === extension}) !== -1;
  };

  _public.key = function() {
    return key;
  };

  return _public;
};
