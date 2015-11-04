var should  = require('should');
var whereIs = require('../');

// Definition
whereIs.should.be.function;

// Execution
whereIs('package.json').length.should.be.above(0);
(whereIs() === null).should.be.true();
(whereIs('perhaps-not-matched-file') === null).should.be.true();

// Done
console.log('> whereIs test complete.');
