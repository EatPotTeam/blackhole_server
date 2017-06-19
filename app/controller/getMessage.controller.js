var user = require('../model/user');
var message = require('../model/message');

module.exports = function(req, res) {
	if (user.exist(req.query.userId)) {
		var lastActiveTime = user.get(req.query.userId);
		var time = (Date.now() - 60*1000 > lastActiveTime) ? Date.now() - 60*1000 : lastActiveTime;
		user.update(req.query.userId, Date.now());
		res.send(JSON.stringify(message.get(time)));
	}

    // for (let i = messages.length-1; i >= 0 && messages[i].time >= latestTime; i--) {
    //     var json_out = {};
    //     json_out.nickname = messages[i].nickname;
    //     json_out.content = messages[i].content;
    //     json_out.createdTime = messages[i].time;
    //     console.log(json_out);
    //     data_out.push(json_out);
    // }    
}