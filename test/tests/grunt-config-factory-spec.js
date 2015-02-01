var proxyquire = require('proxyquire').noCallThru().noPreserveCache(),
    fsStub = {},
    fileHandlerMock = require('../mocks/file-handler');

fsStub.readdirSync = function() {
  return [
    'a-file.json',
    'b-file.json'
  ];
};

exports.testConfigIsEmptyWhenFileNotValid = function (test) {
  fileHandlerMock.isValid = false;
  var config = proxyquire('../../index', {'fs': fsStub, './lib/file-handler': fileHandlerMock}).build('config', 'context');
  test.expect(1);
  test.equal(Object.keys(config).length, 0);
  test.done();
};

exports.testConfigIsPopulatedWhenFileIsValid = function (test) {
  fileHandlerMock.isValid = true;
  var config = proxyquire('../../index', {'fs': fsStub, './lib/file-handler': fileHandlerMock}).build('config', 'a context');
  test.expect(3);
  test.equal(Object.keys(config).length, 2);
  test.ok(/a-file\.json.*a context/.test(config['a-file']));
  test.ok(/b-file\.json.*a context/.test(config['b-file']));
  test.done();
};
