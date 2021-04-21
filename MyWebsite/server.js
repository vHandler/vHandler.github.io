'use strict';
var http = require('https');
var port = 'vhandler.github.io';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
