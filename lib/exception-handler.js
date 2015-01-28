module.exports = function() {
  var _public = {};

  var throwError = function(type, msg) {
    throw new Error(type + ': ' + msg);
  };

  _public.throwInvalidArgument = function(msg) {
    throwError(msg);
  };

  return _public;
}
