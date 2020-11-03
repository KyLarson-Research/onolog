'use strict';
var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 8083;

fs.readFile('./home.html', function (err, html) {

    if (err) throw err;

    http.createServer(function (req, res) {
        res.writeHeader(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    }).listen(port);

});
