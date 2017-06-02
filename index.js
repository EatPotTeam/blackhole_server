var app = require('express')();
var bodyParser = require('body-parser');
var schedule = require('node-schedule');


app.use(bodyParser.json());


var ids = [];
var messages = [];

function getListenPort() {
    if (process.env.NODE_ENV === 'dev')
        return 3456;
    else
        return 3400;
}


var Message = function (nickname, content, time) {
    this.content = content;
    this.nickname = nickname;
    this.time = time;
};

//clear msg slot before 1 min
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

//  login/id
app.get('/login/:id', function (req, res) {
    var respond = {};
    if (ids[req.params.id] !== undefined) {
        respond.result = "login success";
        ids[req.params.id] = Date.now();
    }
    else respond.result = "login fail";
    res.send(JSON.stringify(respond));
});

//  messages #req.body with nickname and content in json format
app.post('/messages', function (req, res) {
    var fb = {};
    fb.content = req.body.content;
    fb.time = Date.now();
    messages.push(new Message(req.body.nickname, req.body.content, Date.now()));
    res.send(JSON.stringify(fb));
});

//  messages?userId={id}
app.get('/messages', function (req, res) {
    var data_out = [];
    var latestTime = (Date.now() - 60*1000 > ids[req.query.userId]) ? Date.now() - 60*1000 : ids[req.query.userId];
    for (i = messages.length-1; i >= 0 && messages[i].time >= latestTime; i--) {
        var json_out = {};
        json_out.nickname = messages[i].nickname;
        json_out.content = messages[i].content;
        json_out.createdTime = messages[i].time;
        console.log(json_out);
        data_out.push(json_out);
    }
    ids[req.query.userId]=Date.now();
    res.send(JSON.stringify(data_out));
});


app.listen(getListenPort(), function() {
    console.log('listen at ' + getListenPort());
});
