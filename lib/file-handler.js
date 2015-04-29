var _ = require('lodash'),
    path = require('path');

var FileHandler = function(filePath, context) {
    this.filePath = filePath;
    this.context = context;
    this.validExtensions = ['.js', '.json'];
    this.extension = path.extname(filePath);
    this.key = path.basename(filePath, this.extension);
    this.isJs = function() {
      return this.extension === '.js';
    };
};

FileHandler.prototype.isValid = function() {
  var self = this;
  return _.findIndex(self.validExtensions, function(e) { return e === self.extension;}) !== -1;
};

FileHandler.prototype.getKey = function() {
  return this.key;
};

FileHandler.prototype.load = function() {
  if(this.isJs()) {
    return require(this.filePath)(this.context);
  }
  return require(this.filePath);
};

exports.new = function(filePath, context) {
  return new FileHandler(filePath, context);
};
