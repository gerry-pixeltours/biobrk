"use strict";

var express = require('express'),
    mongoskin = require('mongoskin'),
    app = express(),
    db = mongoskin.db('mongodb://localhost:27017/integration_tests', {safe:true}),
    appName = conf('name'),
    port = conf('PORT'),
    debug = conf('BUILD_DISTRIBUTION') === 'debug';

logger.info('executing:', process.argv.join(' '));
logger.info('environment: %s, distribution: %s, build: %s',
    conf('NODE_ENV'), conf('BUILD_DISTRIBUTION'), conf('BUILD_VERSION')
);

app.use(express.bodyParser());

app.get("/", function(req, res) {
  res.send("Welcome to BioBrk!");
});

app.post("/timer", function(req, res) {
  res.send([]);
});

app.get("/timer/0001", function(req, res) {
    var returner = {
        "timer": {
            "state": "stopped",
            "currentTime": "",
            "minutes": 0,
            "seconds": 0
        }
    };
    res.send(returner);
});

app.listen(port, function(){
    logger.info('express listening on port', port);
});