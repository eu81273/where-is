var should  = require('should');
var whereIs = require('../');

// Definition
whereIs.should.be.function;

// Execution
console.log(whereIs('package.json'))
whereIs('package.json').should.match(/where-is/);
whereIs().should.be.false();
whereIs('perhaps-not-matched-file').should.be.false();

// Done
console.log('> whereIs test complete.');
