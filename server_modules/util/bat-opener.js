
var spawn = require('child_process').spawn,
    fs = require('fs');

function openBat(batPath) {
    return new Promise(function(res, rej) {
        var result =  [];

        ls = spawn('cmd.exe', ['/c', batPath]);
        ls.on('exit', onBatExit);
        ls.stdout.on('data', onBatStdOut);

        function onBatExit(data) {
            res(result);
        }
        function onBatStdOut(data) {
            console.log(new String(data));
            result.push(data);
        }
        function onError(err) {
            console.error(`${batName}.bat had an error with data - ${err}`);
            rej(err);
        }
    });
}

module.exports = openBat;
