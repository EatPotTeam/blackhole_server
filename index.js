var app = require('express')();
var bodyParser = require('body-parser');


app.use(bodyParser.json());


var ids = [];
var messages = [];


Message = function (message, time) {
	this.message = message;
	this.time = time;
}


app.get('/login/:id', function (req, res) {
	ids[req.param.id] = Date.now();
	res.send("login success");
});


app.post('/submit', function (req, res) {
	var message = Message(req.body, Date.now());
	messages.push(message);
	res.send("message accepted");
});


app.get('/pull/:id', function (req, res) {
	data = [];
	var latestTime = (Date.now() - 60*1000 > ids[id.param.id]) ? Date.now() - 60*1000 : ids[id.param.id];
	for (i = messages.length; i >= 0 && messages[i].time <= latestTime; i--) data.push(messages[i]);
	res.body = JSON.stringify(data);
	res.send();
});


app.listen(8080, function() {
	console.log('listen at 8080');
});