var express = require('express'),
    mongoskin = require('mongoskin'),
    app = express(),
    db = mongoskin.db('mongodb://localhost:27017/integration_tests', {safe:true});

app.use(express.bodyParser());

app.get("/", function(req, res) {
  res.send("Welcome to BioBrk!");
});

app.get("/timer/0001", function(req, res) {
    var returner = {
        "timer": {
            "state": "stopped",
            "currentTime": "",
            "minutes": 0
        }
    };
    res.send(returner);
});



app.listen(3000);