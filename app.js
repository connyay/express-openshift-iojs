'use strict';
var express = require('express');
var app = express();

var config = {
  ip: process.env.OPENSHIFT_IOJS_IP || '0.0.0.0',
  port: process.env.OPENSHIFT_IOJS_PORT || 3000
};

app.get('/', function(req, res) {
  res.send('Hello World! io.js version: ' + process.version);
});

app.listen(config.port, config.ip, function() {
  console.log('Example app listening at http://%s:%s', config.ip, config.port);
});
