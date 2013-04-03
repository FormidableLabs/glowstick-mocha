var assert = require("assert"),
    _ = require('underscore');
describe('Array', function(){
  _.range(0, 64).forEach(function(i) {
    console.log('?');
    it('equals ' + i, function(done) {
      if (i % 5 === 0) {
        assert.notEqual(i, i);
      } else {
        assert.equal(i, i);
      }
      setTimeout(done, 250);
    });
  });
});