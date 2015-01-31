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

exports.testRetrieveConfigurationKeyFromFilename = function(test) {
  test.expect(1);
  test.equal(fileHandler('file.js').key(), 'file');
  test.done();
};

exports.testRetrieveConfigurationKeyFromFilePath = function(test) {
  test.expect(1);
  test.equal(fileHandler('/some/path/file.js').key(), 'file');
  test.done();
};
