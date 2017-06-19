var schedule = require('node-schedule');

messages = []

export.get = (time) => {

}

export.add = (nickname, message) => {

}

var Message = function (nickname, content, time) {
    this.content = content;
    this.nickname = nickname;
    this.time = time;
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