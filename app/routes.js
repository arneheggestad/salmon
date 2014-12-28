var board = require('./board.js')
		;

module.exports = function (app) {
	// base
	app.get('/', function (req, res) {
		console.log(req.params);
		res.sendFile('/html/index.html', { root: __dirname });
	});
	app.get('/game/:choices', function (req, res) {
		console.log(req.params.choices);
		board.generate(req.params.choices, function (err, boardData) {
			if (err) { res.send('Error!') };
			console.log(boardData);
			res.send(boardData);
		});
	});
}
