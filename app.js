const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./app/router/index.router')(app);

app.use(express.static('app/public'));

app.set('views', './app/views');
app.set('view engine', 'jade');

app.listen(getListenPort(), function() {
    console.log('listen at ' + getListenPort());
});

function getListenPort() {
    if (process.env.LISTENING_PORT === undefined)
        return 3400;
    else
        return process.env.LISTENING_PORT;
}

module.exports = app;