/**
 * Created by leo on 17-6-24.
 */

var path = require('path');

module.exports = function (req, res) {
    res.render('index', { title: "Blackhole" });
};