var express = require('express'),
    _ = require('lodash'),
    app = express(),
    configRoutes = require('./server_modules/routes/configRoutes.js');
    openBat = require('./server_modules/util/bat-opener.js');

configRoutes(app);

app.listen(process.env.PORT || 3333);
