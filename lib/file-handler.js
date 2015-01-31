var _ = require('lodash'),
    path = require('path');

var FileHandler = function(filePath, context) {
    this.filePath = filePath;
    this.context = context;
    this.validExtensions = ['.js', '.json'];
    this.extension = path.extname(filePath);
    this.key = path.basename(filePath, this.extension);
};

FileHandler.prototype.isValid = function() {
  var self = this;
  return _.findIndex(self.validExtensions, function(e) { return e === self.extension}) !== -1;
};

FileHandler.prototype.getKey = function() {
  return this.key;
};

FileHandler.prototype.path = function() {
  return this.filePath;
};

module.exports = FileHandler;
