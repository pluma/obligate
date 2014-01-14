/*! obligate 0.1.0 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */
exports = module.exports = obligate;
function obligate(predicate, message) {
  return function obligated(val) {
    if (!predicate(val)) {
      throw new ObligationError(message);
    }
    return val;
  };
}

exports.ObligationError = ObligationError;
function ObligationError(message) {
  var stack;
  if (Object.getPrototypeOf(this) !== ObligationError.prototype) {
    var self = new ObligationError(message);
    stack = (new Error()).stack.split('\n');
    stack.splice(0, 2, self.toString());
    self.stack = stack.join('\n');
    return self;
  }
  this.message = message;
  stack = (new Error()).stack.split('\n');
  stack.splice(0, 2, this.toString());
  this.stack = stack.join('\n');
}
ObligationError.prototype = Object.create(Error.prototype);
ObligationError.prototype.name = 'ObligationError';
