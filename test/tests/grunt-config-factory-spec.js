var proxyquire = require('proxyquire').noCallThru(),
    fsStub = {},
    requirerStub = {},
    factory = proxyquire('../../index', {'fs': fsStub, './lib/requirer': requirerStub});

fsStub.readdirSync = function() {
  return [
    'a-file.json',
    'b-file.json',
    'c-file.txt',
    'd-file.js'
  ];
};

requirerStub.require = function(filePath) {
  if(/\.json$/.test(filePath))
    return filePath;
  return function(context) {
    return 'FilePath: ' + filePath + '\nContext: ' + context;
  };
};

var config = factory.build('config', 'context');

exports.testFactoryReturnsConfigWithThreeKeys = function (test) {
  test.expect(1);
  test.equal(Object.keys(config).length, 3);
  test.done();
};

exports.testFactoryReturnsConfigWithCorrectJSONValues = function (test) {
  test.expect(2);
  test.ok(/config\/a\-file\.json/.test(config['a-file']));
  test.ok(/config\/b\-file\.json/.test(config['b-file']));
  test.done();
};

exports.testFactoryReturnsConfigWithCorrectJSValue = function (test) {
  test.expect(2);
  test.ok(/config\/d\-file\.js/.test(config['d-file']));
  test.ok(/Context: context/.test(config['d-file']));
  test.done();
};
