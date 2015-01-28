module.exports = {
  setUp: function (callback) {
    this.Handler = require('../lib/exception-handler.js')();
    callback();
  },
  tearDown: function (callback) {
    callback();
  },
  testThrowInvalidArgumentExceptionThrowsError: function (test) {
    var self = this;
    test.expect(1);
    test.throws(
      function() {
        self.Handler.throwInvalidArgument('a msg');
      },
      Error
    );
    test.done();
  },
  testThrowInvalidArgumentExceptionFormat: function (test) {
    var self = this;
    test.expect(1);
    test.throws(
      function() {
        self.Handler.throwInvalidArgument('a msg');
      },
      /a msg/
    );
    test.done();
  }
};
