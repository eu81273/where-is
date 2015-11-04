var fs = require('fs');
var path = require('path');

var traverse = function (mark, directory) {
    var parentDirectory = path.resolve(directory, '..');
    var files = fs.readdirSync(directory) || [];
    var found = files.some(function (file) {
        return file === mark;
    });

    if (found) {
        return directory;
    }
    else {
        if (directory === parentDirectory) {
            return null;
        }
        else {
            return traverse(mark, parentDirectory);
        }
    }
};

module.exports = function (mark, directory) {
    directory = directory || process.cwd();

    return traverse(mark, directory);
};
