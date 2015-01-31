var FileHandler = require('../../lib/file-handler');

exports.testJSONIsValid = function(test) {
  test.expect(1);
  var fileHandler = new FileHandler('file.json');
  test.strictEqual(fileHandler.isValid(), true);
  test.done();
};

exports.testJSIsValid = function(test) {
  test.expect(1);
  var fileHandler = new FileHandler('file.js');
  test.strictEqual(fileHandler.isValid(), true);
  test.done();
};

exports.testTXTIsNotValid = function(test) {
  test.expect(1);
  var fileHandler = new FileHandler('file.txt');
  test.strictEqual(fileHandler.isValid(), false);
  test.done();
};

exports.testMissingExtensionIsNotValid = function(test) {
  test.expect(1);
  var fileHandler = new FileHandler('file');
  test.strictEqual(fileHandler.isValid(), false);
  test.done();
};

exports.testRetrieveConfigurationKeyFromFilename = function(test) {
  test.expect(1);
  var fileHandler = new FileHandler('file.js');
  test.equal(fileHandler.getKey(), 'file');
  test.done();
};

exports.testRetrieveConfigurationKeyFromFilePath = function(test) {
  test.expect(1);
  var fileHandler = new FileHandler('/some/path/file.js');
  test.equal(fileHandler.getKey(), 'file');
  test.done();
};

exports.testRetrieveFilePath = function(test) {
  test.expect(1);
  var fileHandler = new FileHandler('/some/path/file.js');
  test.equal(fileHandler.path(), '/some/path/file.js');
  test.done();
};
