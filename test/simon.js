var should = require('should'),
		simon = require('../app/simon.js')
		;

var options = {
	choices: 4
}

describe('initialize game', function () {
	it('should start a new game', function (done) {
		simon.init(options, function (err, gameObject) {
			(typeof(gameObject)).should.eql('object');
			done();
		})
	})
});
describe('round 1', function () {
	it('should create a round 1 answer', function (done) {
		var testGame = {
			choices: 4,
			round: 1,
			answer: '',
			guess: ''
		};
		simon.newRound(testGame, function (err, returnedGame) {
			returnedGame.answer.length.should.eql(1);
			done();
		});
	});
})