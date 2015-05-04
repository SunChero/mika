/// <reference path="typings/node/node.d.ts"/>


var express = require('express');

var app = express();

app.get('/', function(req, res){
	
	res.end('OK!');
	
});

app.listen(process.env.PORT || 80);






