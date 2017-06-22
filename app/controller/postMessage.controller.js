var messages = require('../model/message');

module.exports = function(req, res) {
    var tmp;
    if (req.body.reply === undefined) tmp = "";
    else tmp = req.body.reply;
    messages.add(req.body.nickname, req.body.content, tmp, req.body.color);
    res.send(JSON.stringify({
    	content: req.body.content,
    	time: Date.now(),
        reply: tmp,
        color: req.body.color
    }));
};