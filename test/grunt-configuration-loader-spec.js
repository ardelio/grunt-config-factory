module.exports = {
  setUp: function (callback) {
    this.Loader = require('../index.js');
    callback();
  },
  tearDown: function (callback) {
    callback();
  },
  testNoParameterThrowsError: function (test) {
    var self = this;
    test.expect(1);
    test.throws(
      function() {
        self.Loader();
      },
      Error
    );
    test.done();
  },
  testNoParameterThrowsCorrectErrorMessage: function (test) {
    var self = this;
    test.expect(1);
    test.throws(
      function() {
        self.Loader();
      },
      /Please provide the directory where the JSON configurations are stored\./
    );
    test.done();
  }
};
