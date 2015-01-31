var _ = require('lodash'),
    path = require('path');

module.exports = function(filePath) {
  var _public = {};

  var validExtensions = ['js', 'json'];

  var getExtension = function() {
    return _.find(validExtensions, function(ext) { return _.endsWith(filePath, ext); });
  };

  var getKey = function() {
    return path.basename(filePath, '.' + extension);
  };

  var extension = getExtension();
  var key = getKey();

  _public.isValid = function() {
    return typeof(extension) !== 'undefined';
  };

  _public.key = function() {
    return key;
  };

  return _public;
};
