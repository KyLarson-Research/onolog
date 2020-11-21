//Authored By Kyle Larson on August 28
//Do not coppy, or redistribute the following source code is the intellectual property of KyLarson-Research
//Pending Copyright(c) KyLarson-Research all rights reserved
'use strict';
var http = require('http');
const fs = require('fs');
var port = process.env.PORT || 1337;
var path = require('path');
var express = require('express');

var io = require('socket.io');

/*const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./home.html', function (error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File Not Found')//TODO create custom 404 page to write
        } else {
            res.write(data)
        }
        res.end()
    });
    //res.end('Hello World\n');
});*/

var app = express();
var server = http.createServer(app)
server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
    res.render('home');
});
/*
fs.appendFile('engineEERED.txt', 'node success!', function (err) {
    if (err) throw err;
    console.log('saved');
});*/