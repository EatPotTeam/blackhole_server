var messages = require('../model/message');

module.exports = function(req, res) {
    var reply_tmp, session_tmp;
    if (req.body.reply === undefined)
        reply_tmp = "";
    else
        reply_tmp = req.body.reply;
    if (req.body.sessionId === undefined)
        session_tmp = "";
    else
        session_tmp = req.body.sessionId;
    messages.add(req.body.nickname, req.body.content, reply_tmp, req.body.color, session_tmp);
    res.send(JSON.stringify({
    	content: req.body.content,
    	time: Date.now(),
        reply: reply_tmp,
        color: req.body.color,
        sessionId: session_tmp
    }));
};