var fileHandler = require('../../lib/file-handler');

exports.testIsValid = function(test) {
  test.expect(1);
  test.strictEqual(fileHandler('file.json').isValid(), true);
  test.done();
};

exports.testIsNotValid = function(test) {
  test.expect(1);
  test.strictEqual(fileHandler('file.txt').isValid(), false);
  test.done();
};
