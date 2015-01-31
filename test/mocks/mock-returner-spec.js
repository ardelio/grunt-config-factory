var mockReturner = require('./mock-returner');

exports.testReturnsContext = function(test) {
  test.expect(1);
  test.strictEqual(mockReturner('context'), 'context');
  test.done();
};
