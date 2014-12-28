module.exports = function (app) {
	// base
	app.get('/', function (req, res) {
		console.log(req._remoteAddress + ': ' + req.url);
		res.sendFile('/html/index.html', { root: __dirname });
	});
}