var fileHandler = require('../../lib/file-handler');

exports.testJSONIsValid = function(test) {
  test.expect(1);
  test.strictEqual(fileHandler('file.json').isValid(), true);
  test.done();
};

exports.testJSIsValid = function(test) {
  test.expect(1);
  test.strictEqual(fileHandler('file.js').isValid(), true);
  test.done();
};

exports.testTXTIsNotValid = function(test) {
  test.expect(1);
  test.strictEqual(fileHandler('file.txt').isValid(), false);
  test.done();
};

exports.testMissingExtensionIsNotValid = function(test) {
  test.expect(1);
  test.strictEqual(fileHandler('file').isValid(), false);
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

exports.testRetrieveFilePath = function(test) {
  test.expect(1);
  test.equal(fileHandler('/some/path/file.js').path, '/some/path/file.js');
  test.done();
};
