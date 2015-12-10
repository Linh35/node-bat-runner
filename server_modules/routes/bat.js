var working = {},
    blocked = {},
    openBat = require('../util/bat-opener.js')
    rootBatPath = '';

function batRoutes(app) {

    app.get('/openBat/:batName', (req, res)=> {
        var batName = req.params.batName.toString();
        var batPath = `${rootBatPath}\\${batName}.bat`;

        if(!working[batName]) {

            openBat(batPath).then((res) => {
                working[batName] = false;
            });
            working[batName] = new Date();
            
            return res.json(true);
        } else {
            return res.json(false);
        }
    });

    app.get('/batStatus/:batName', (req, res) => {
        var dateStarted = working[req.params.batName] || null;
        res.json({
            dateStarted: dateStarted,
            blocked: blocked[req.params.batName]
        });
    });

    app.get('blockbat/:batName', (req, res) => {
        blocked[req.params.batName] = new Date();
        res.json(true);
    });

    app.get('unblockbat/:batName', (req, res) => {
        blocked[req.params.batName] = false;
        res.json(true);
    });
}

module.exports = batRoutes;
