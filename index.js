var app = require('express')();
var bodyParser = require('body-parser');
var schedule = require('node-schedule');


app.use(bodyParser.json());


var ids = [];
var messages = [];


var Message = function (message, time) {
    this.message = message;
    this.time = time;
}

function scheduleCronstyle() {
    schedule.scheduleJob('30 * * * * *', function(){
        var newTime = Date.now()-60*1000;
        var count = 0;
        for (var i = 0; i < messages.length; i++) {
            if (messages[i].time < newTime) count++;
        }
        messages.splice(0,count);
        console.log(messages.length);
    }); 
}
scheduleCronstyle();

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
    ids[req.params.id]=Date.now();
    res.send(JSON.stringify(data));
});


app.listen(8080, function() {
    console.log('listen at 8080');
});