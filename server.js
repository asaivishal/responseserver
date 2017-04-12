var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    console.log(req.body);
    res.json(req.body);
});

// bootstrap the server.
var server = app.listen(3000, 'leisureresserver.dev', function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Yo, this app listening at http://%s:%s", host, port);
});

