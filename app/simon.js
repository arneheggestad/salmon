var game = {
	init: function (options, callback) {
		if (!options.choices) {
			options.choices = 4;
		}
		console.log('New game started with ' + options.choices + ' options.');
		var newGame = {
			choices: options.choices,
			round: 0,
			answer: '',
			guess: ''
		}
		return callback(null, newGame);
	},
	newRound: function (gameObj, callback) {
		var max = parseInt(gameObj.choices);
		var newChar = Math.floor(Math.random() * max + 1);
		console.log(newChar);
		gameObj.answer = gameObj.answer + newChar;
		return callback(null, gameObj);
	}

}

module.exports = game;
