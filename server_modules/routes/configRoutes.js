var fs = require('fs'),
    fileName = __filename.split(/[\\/]/).pop(),
    filePaths = fs.readdirSync(__dirname);

removeFromArray(fileName, filePaths);

function configRoutes(app) {
    filePaths.forEach(function (path) {
        require(`${__dirname}/${path}`)(app);
    });
}
function removeFromArray(el, array) {
    var index = array.indexOf(el);

    if(index) {
        array.splice(index, 1);
        return 1;
    } else {
        return 0;
    }
}

module.exports = configRoutes;
