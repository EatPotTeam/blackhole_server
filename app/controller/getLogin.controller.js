var user = require('../model/user');

module.exports = function(req, res) {
	respond = {};
	if (user.exist(req.params.id)) {
		respond.result = "login success";
        res.send(JSON.stringify(respond));
	} else {
		respond.result = "login fail";
        res.status(401).send(JSON.stringify(respond));
	}
    // if (ids[req.params.id] !== undefined) {
    //     respond.result = "login success";
    //     ids[req.params.id] = Date.now();
    // }
    // else respond.result = "login fail";
    
};