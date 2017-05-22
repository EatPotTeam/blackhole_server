var app = require('express')();
var bodyParser = require('body-parser');


app.use(bodyParser.json());


var ids = [];
var messages = [];


var Message = function (message, time) {
	this.message = message;
	this.time = time;
}


app.get('/login/:id', function (req, res) {
	ids[req.params.id] = Date.now();
	res.send("login success");
});


app.post('/submit', function (req, res) {
	messages.push(new Message(req.body, Date.now()));
	res.send("message accepted");
});


app.get('/pull/:id', function (req, res) {
	data = [];
	var latestTime = (Date.now() - 60*1000 > ids[req.params.id]) ? Date.now() - 60*1000 : ids[req.params.id];
	for (i = messages.length-1; i >= 0 && messages[i].time >= latestTime; i--) data.push(messages[i]);
	//res.body = JSON.stringify(data);
	res.send(JSON.stringify(data));
});


app.listen(8080, function() {
	console.log('listen at 8080');
});