var user = require('../model/user');
var shortid = require('shortid');

module.exports = function(req, res) {
	var id = shortid.generate();
	user.update(id);
	res.send(JSON.stringify({
        "id": id
    }));
}