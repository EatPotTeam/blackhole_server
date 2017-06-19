const postRegister = require('../controller/postRegister.controller');
const getLogin = require('../controller/getLogin.controller');
const postMessage = require('../controller/postMessage.controller');
const getMessage = require('../controller/getMessage.controller');

module.exports = (router) => {
	router.post('/register', postRegister);
	router.get('/login:id', getLogin);
	router.post('/message', postMessage);
	router.get('/message', getMessage);
}
