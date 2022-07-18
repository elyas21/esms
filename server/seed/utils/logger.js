var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + 'server.log', { flags: 'w' });
var log_stdout = process.stdout;

console.log = function () { //
    [...arguments].forEach(element => {
        log_file.write(util.format(element) + '\n');
        log_stdout.write(util.format(element) + '\n');
    });
};

module.exports = {
    console
}