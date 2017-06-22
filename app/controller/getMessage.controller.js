user = require('../model/user');
message = require('../model/message');

module.exports = function(req, res) {
	if (user.exist(req.query.userId)) {
		lastActiveTime = user.get(req.query.userId);
		time = (Date.now() - 60*1000 > lastActiveTime) ? Date.now() - 60*1000 : lastActiveTime;
        user.update(req.query.userId);
		res.send(JSON.stringify(message.get(time)));
	} else {
        console.log("user undefined");
        res.status(401).send(JSON.stringify("user undefined"));
    }

    // for (let i = messages.length-1; i >= 0 && messages[i].time >= latestTime; i--) {
    //     var json_out = {};
    //     json_out.nickname = messages[i].nickname;
    //     json_out.content = messages[i].content;
    //     json_out.createdTime = messages[i].time;
    //     console.log(json_out);
    //     data_out.push(json_out);
    // }    
};