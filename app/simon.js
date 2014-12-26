var game = {
	// initialize a new game
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
	// increments round counter and generates a new random number for the next round
	newRound: function (gameObj, callback) { 
		var max = parseInt(gameObj.choices);
		var newChar = Math.floor(Math.random() * max + 1);
		console.log(gameObj.answer, newChar);
		gameObj.round++;
		gameObj.answer = gameObj.answer + newChar;
		return callback(null, gameObj);
	},
	// checks the player's guess against the correct answer
	checkAns: function (gameObj, callback) {
		var answer = gameObj.answer,
				guess = gameObj.guess,
				correct = false;
		for (var i = 0; i < answer.length; i++) {
			if (guess.charAt(i) != answer.charAt(i)) {
				return callback(null, gameObj, correct);
			}
			if (i === answer.length - 1) {
				correct = true;
				return callback(null, gameObj, correct);
			}
		}
	}

}

module.exports = game;
