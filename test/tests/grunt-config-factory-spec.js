var proxyquire = require('proxyquire').noCallThru(),
    fsStub = {},
    requirerStub = {},
    factory = proxyquire('../../index', {'fs': fsStub, './lib/requirer': requirerStub});

fsStub.readdirSync = function() {
  return [
    'a-file.json',
    'b-file.json',
    'c-file.txt',
  ];
};

requirerStub.require = function(filePath) {
  return filePath;
};

var config = factory.build('config');

exports.testFactoryReturnsConfigWithTwoKeys = function (test) {
  test.expect(1);
  test.equal(Object.keys(config).length, 2);
  test.done();
};

exports.testFactoryReturnsConfigWithCorrectValues = function (test) {
  test.expect(2);
  test.ok(/config\/a\-file\.json/.test(config['a-file']));
  test.ok(/config\/b\-file\.json/.test(config['b-file']));
  test.done();
};
