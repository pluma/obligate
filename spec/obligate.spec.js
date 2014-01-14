/*global describe, it */
var expect = require('expect.js'),
  obligate = require('../');

describe('obligate(predicate, message)', function() {
  it('is a function', function() {
    expect(obligate).to.be.a('function');
  });
  it('returns a function', function() {
    expect(obligate()).to.be.a('function');
  });
  it('calls the predicate', function() {
    var called = false;
    obligate(function() {
      called = true;
      return true;
    })();
    expect(called).to.equal(true);
  });
  it('throws if the predicate returns false', function() {
    expect(obligate(function() {
      return false;
    }, 'Foo')).to.throwException(function(e) {
      expect(e).to.be.a(obligate.ObligationError);
      expect(e).to.have.property('message', 'Foo');
    });
  });
  it('returns its input if the predicate returns true', function() {
    var input = {foo: 'bar'};
    var obligated = obligate(function() {return true;});
    expect(obligated(input)).to.equal(input);
  });
});