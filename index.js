var express = require('express'),
		app = express(),
		morgan = require('morgan'),
		session = require('express-session'),
		simon = require('./app/simon.js'),
		prompt = require('prompt')
		;

var options = {},
		correct = true;
prompt.start();

var gameRound = function (gameObj) {
	simon.newRound(gameObj, function (err, gameObj) {
		console.log('Take a guess: ');
		prompt.get('guess', function (err, result) {
			gameObj.guess = result.guess;
			simon.checkAns(gameObj, function (err, gameObj, correct) {
				if (correct === true) {
					console.log('Correct!');
					gameRound(gameObj);
				} else {
					console.log('Incorrect. Thanks for playing!');
				}
			});
		});
	});
};

console.log('How many choices would you like?');
prompt.get('choices', function (err, result) {
	options.choices = result.choices;
	simon.init(options, function (err, gameObj) {
		gameRound(gameObj)
	});
});
