var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var app = new express();
var port = 8080;
var path = require('path');
var MobileDetect = require('mobile-detect');

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));
app.use(express.static(__dirname + '/'));
app.get("/web/*", function (req, res) {
	var md = new MobileDetect(req.headers['user-agent']);
	console.log(md.mobile());
	res.sendFile(__dirname + "/dashboard.html");
});

app.get('/api/contents', function (req, res) {
	res.sendFile(__dirname + '/contents.json');
});

app.post("/api/login", function (req, res) {
	res.sendFile(__dirname + '/user.json');
});

app.get('/api/time', function (req, res) {
	res.sendFile(__dirname + '/time.json');
});

app.listen(port, function (error) {
	if (error) {
		console.error(error);
	} else {
		console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
	}
});
