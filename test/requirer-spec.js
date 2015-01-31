var mockReturner = require('./mocks/mock-returner'),
    proxyquire = require('proxyquire').noCallThru(),
    requirer = proxyquire('../lib/requirer', { 'filePath': mockReturner});

exports.testReturnsFunctionWhenContextNotDefined = function(test) {
  test.expect(1);
  test.equal(requirer.require('filePath').toString(), "function (context) {\n  return context;\n}");
  test.done();
};

exports.testReturnsContextWhenContextDefined = function(test) {
  test.expect(1);
  test.equal(requirer.require('filePath')('Some Context'), 'Some Context');
  test.done();
};
