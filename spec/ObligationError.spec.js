/*global describe, it */
var expect = require('expect.js'),
  ObligationError = require('../').ObligationError;

describe('new ObligationError(message)', function() {
  it('is a constructor', function() {
    expect(ObligationError).to.be.a('function');
    expect(ObligationError).to.have.property('prototype');
    expect(ObligationError.prototype).to.be.an('object');
  });
  it('returns a new ObligationError instance', function() {
    var err = new ObligationError();
    expect(Object.getPrototypeOf(err)).to.equal(ObligationError.prototype);
  });
  it('uses the passed message', function() {
    var err = new ObligationError('Foo');
    expect(err).to.have.property('message', 'Foo');
  });
  it('can be called as a function', function() {
    var err = ObligationError();
    expect(Object.getPrototypeOf(err)).to.equal(ObligationError.prototype);
  });
});