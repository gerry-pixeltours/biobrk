var express = require('express'),
    mongoskin = require('mongoskin'),
    app = express(),
    db = mongoskin.db('mongodb://localhost:27017/integration_tests', {safe:true});

app.use(express.bodyParser());

app.get("/", function(req, res) {
  res.send("Welcome to BioBrk!");
});

app.get("/timer/0001", function(req, res) {
    res.send("Hello Gerry!");
});

app.listen(3000);