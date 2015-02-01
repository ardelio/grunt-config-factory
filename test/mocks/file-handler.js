var path = require('path');

module.exports = {
  isValid: false,
  new: function(filePath, context) {
    var self = this;
    return {
      getKey: function() {
        return path.basename(filePath, path.extname(filePath));
      },
      isValid: function() {
        return self.isValid;
      },
      load: function() {
        return 'fp: ' + filePath + ';ct: ' + context;
      }
    };
  }
};
