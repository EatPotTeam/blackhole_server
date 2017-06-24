/**
 * Created by leo on 17-6-24.
 */

var qr = require('qr-image');
var fs = require('fs');
var path = require('path');

module.exports = function (req, res) {
    var link = req.body.link;
    if (link) {
        if (fs.existsSync(path.resolve(__dirname + './../public/upload/QR.png')))
            fs.unlinkSync(path.resolve(__dirname + './../public/upload/QR.png'));
        var qr_png = qr.image(link, { type: 'png' });
        qr_png.pipe(fs.createWriteStream(path.resolve(__dirname + './../public/upload/QR.png')));
    }
    res.send(JSON.stringify('success'));
};