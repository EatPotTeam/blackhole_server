const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./app/router/index.router')(app);

app.listen(getListenPort(), function() {
    console.log('listen at ' + getListenPort());
});

function getListenPort() {
    if (process.env.NODE_ENV === 'dev')
        return 3456;
    else
        return 3400;
}