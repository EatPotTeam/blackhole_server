const express = require('express');
const Router = express.Router;
const router = Router();

module.exports = (app) => {
	require('./router')(router);
	app.use(router);
};
