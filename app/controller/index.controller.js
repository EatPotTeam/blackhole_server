/**
 * Created by leo on 17-6-24.
 */

var path = require('path');

module.exports = function (req, res) {
    res.sendFile(path.resolve(__dirname + './../views/index.html'));
};