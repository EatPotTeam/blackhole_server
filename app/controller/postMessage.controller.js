var message = require('../model/message');

module.exports = function(req, res) {
    messages.add(req.body.nickname, req.body.content);
    res.send(JSON.stringify({
    	content: req.body.content,
    	time: Date.now()
    }));
}