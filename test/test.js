var should  = require('should');
var whereIs = require('../');

// Definition
whereIs.should.be.function;

// Execution
whereIs('package.json').should.match(/where-is/);
whereIs('package.json', '/').should.be.false();
whereIs().should.be.false();
whereIs('perhaps-no-exist-file').should.be.false();

// Done
console.log('> whereIs test complete.');
