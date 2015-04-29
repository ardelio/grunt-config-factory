var proxyquire = require('proxyquire').noCallThru();

module.exports = {
  setUp: function(callback) {
    this.FileHandler = require('../../lib/file-handler');
    callback();
  },
  tearDown: function(callback) {
    callback();
  },
  testJSONIsValid: function(test) {
    test.expect(1);
    var fileHandler = this.FileHandler.new('file.json');
    test.strictEqual(fileHandler.isValid(), true);
    test.done();
  },
  testJSIsValid: function(test) {
    test.expect(1);
    var fileHandler = this.FileHandler.new('file.js');
    test.strictEqual(fileHandler.isValid(), true);
    test.done();
  },
  testTXTIsNotValid: function(test) {
    test.expect(1);
    var fileHandler = this.FileHandler.new('file.txt');
    test.strictEqual(fileHandler.isValid(), false);
    test.done();
  },
  testMissingExtensionIsNotValid: function(test) {
    test.expect(1);
    var fileHandler = this.FileHandler.new('file');
    test.strictEqual(fileHandler.isValid(), false);
    test.done();
  },
  testRetrieveConfigurationKeyFromFilename: function(test) {
    test.expect(1);
    var fileHandler = this.FileHandler.new('file.js');
    test.equal(fileHandler.getKey(), 'file');
    test.done();
  },
  testRetrieveConfigurationKeyFromFilePath: function(test) {
    test.expect(1);
    var fileHandler = this.FileHandler.new('/some/path/file.js');
    test.equal(fileHandler.getKey(), 'file');
    test.done();
  },
  testLoadsJSONWithoutContext: function (test) {
    test.expect(1);
    var FileHandler = proxyquire('../../lib/file-handler', {'/some/path/file.json': 'I am json'});
    var fileHandler = FileHandler.new('/some/path/file.json', 'some context');
    test.equal(fileHandler.load(), 'I am json');
    test.done();
  },
  testLoadsJSWithContext: function (test) {
    test.expect(1);
    var FileHandler = proxyquire('../../lib/file-handler', {'/some/path/file.js': function(context) { return context;}});
    var fileHandler = FileHandler.new('/some/path/file.js', 'some context');
    test.equal(fileHandler.load(), 'some context');
    test.done();
  }
};
