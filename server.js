var express   = require('express');
var app       = express();


app.post('/', function(req, res){
	console.log(req.query);
});


// bootstrap the server.
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Yo, you fuck - this app listening at http://%s:%s", host, port);
});