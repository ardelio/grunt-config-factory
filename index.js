module.exports = function(dir) {
  var ExceptionHandler = require('./lib/exception-handler.js')();
  
  ExceptionHandler.throwInvalidArgument('Please provide the directory where the JSON configurations are stored.');
};
