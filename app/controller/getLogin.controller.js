var user = require('../modle/user');

module.exports = function(req, res) {
	var respond = {};
	if (user.exist(req.params.id)) {
		respond.result = "login success";
	} else {
		respond.result = "login fail";
	}
	res.send(JSON.stringify(respond));
    // if (ids[req.params.id] !== undefined) {
    //     respond.result = "login success";
    //     ids[req.params.id] = Date.now();
    // }
    // else respond.result = "login fail";
    
}