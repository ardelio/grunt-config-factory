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
    }
};

FileHandler.prototype.isValid = function() {
  var self = this;
  return _.findIndex(self.validExtensions, function(e) { return e === self.extension}) !== -1;
};

FileHandler.prototype.getKey = function() {
  return this.key;
};

//TODO dont need this anymore
FileHandler.prototype.path = function() {
  return this.filePath;
};

FileHandler.prototype.load = function() {
  if(this.isJs())
    return require(this.filePath)(this.context);
  return require(this.filePath);
};

module.exports = FileHandler;
