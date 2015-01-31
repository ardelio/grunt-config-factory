exports.require = function(filePath, context) {
  if (typeof(context) === 'undefined') {
    return require(filePath);
  } else {
    return require(filePath)(context);
  }
};
