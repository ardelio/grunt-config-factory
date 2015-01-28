var factory = require('../index');

exports.testFactoryReturnsConfigWithTwoKeys = function (test) {
  test.expect(1);
  test.equal(Object.keys(factory.build('test/fakes')).length, 2);
  test.done();
};

exports.testFactoryReturnsConfigWithCorrectKeys = function (test) {
  test.expect(2);
  var keys = Object.keys(factory.build('test/fakes'));
  test.equal(keys[0], 'a-file');
  test.equal(keys[1], 'b-file');
  test.done();
};
