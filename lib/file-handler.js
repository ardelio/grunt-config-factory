var _ = require('lodash');

module.exports = function(filePath) {
  var _public = {};

  var validExtensions = ['js', 'json'];

  var getExtension = function() {
    return _.find(validExtensions, function(ext) { return _.endsWith(filePath, ext); });
  };

  var extension = getExtension();

  _public.isValid = function() {
    console.log(extension);
    return typeof(extension) !== 'undefined';
  };

  return _public;
};
