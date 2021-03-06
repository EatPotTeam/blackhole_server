var schedule = require('node-schedule');

messages = []

exports.get = (time) => {
    var data_out = [];
    //var latestTime = (Date.now() - 60*1000 > time) ? Date.now() - 60*1000 : time;
    for (i = messages.length-1; i >= 0 && messages[i].time >= time; i--) {
        var json_out = {};
        json_out.nickname = messages[i].nickname;
        json_out.content = messages[i].content;
        json_out.createdTime = messages[i].time;
        json_out.reply = messages[i].reply;
        json_out.color = messages[i].color;
        json_out.sessionId = messages[i].sessionId;
        console.log(json_out);
        data_out.push(json_out);
    }
    return data_out;
};

exports.add = (nickname, message, reply, color, sessionId) => {
    messages.push(new Message(nickname, message, Date.now(), reply, color, sessionId));
};

var Message = function (nickname, content, time, reply, color, sessionId) {
    this.content = content;
    this.nickname = nickname;
    this.time = time;
    this.reply = reply;
    this.color = color;
    this.sessionId = sessionId;
};

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