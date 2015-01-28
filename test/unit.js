module.exports = {
  setUp: function (callback) {
    this.Loader = require('../index.js');
    callback();
  },
  tearDown: function (callback) {
    callback();
  },
  testThrowsInvalidArgumentException: function (test) {
    test.expect(1);
    test.throws(this.Loader(), "Please provide the directory as a parameter.")
    test.done();
  }
};
