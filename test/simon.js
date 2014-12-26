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
	it('first round answer should be correct', function (done) {
		var testGame = {
			choices: 4,
			round: 1,
			answer: '1',
			guess: '1'
		};
		simon.checkAns(testGame, function (err, returnedGame, correct) {
			correct.should.eql(true);
			done();
		})
	});
	it('first round answer should be incorrect', function (done) {
		var testGame = {
			choices: 4,
			round: 1,
			answer: '1',
			guess: '2'
		};
		simon.checkAns(testGame, function (err, returnedGame, correct) {
			correct.should.eql(false);
			done();
		})
	});
});
describe('later game', function () {
	it('should create a round 18 answer', function (done) {
		var testGame = {
			choices: 4,
			round: 18,
			answer: '12332321132322231',
			guess: '12332321132322231'
		};		
		simon.newRound(testGame, function (err, returnedGame) {
			(typeof(returnedGame)).should.eql('object');
			(returnedGame.answer.length).should.eql(18);
			returnedGame.answer.should.startWith(testGame.answer);
			done();
		})
	});
	it('later game answer should be correct', function (done) {
		var testGame = {
			choices: 4,
			round: 17,
			answer: '123323211323222311',
			guess: '123323211323222311'
		};
		simon.checkAns(testGame, function (err, returnedGame, correct) {
			correct.should.eql(true);
			done();
		})
	});
	it('later game answer should be correct', function (done) {
		var testGame = {
			choices: 4,
			round: 18,
			answer: '123323211323222311',
			guess: '123323211323222211'
		};
		simon.checkAns(testGame, function (err, returnedGame, correct) {
			correct.should.eql(false);
			done();
		})
	})	
});
describe('initialize game errors', function () {
	it('should not start: too many options', function (done) {
		options.choices = 73;
		simon.init(options, function (err, returnedGame) {
			err.should.exist;
			console.log(err);
			done();
		});
	});
	it('should not start: too few options', function (done) {
		options.choices = 1;
		simon.init(options, function (err, returnedGame) {
			err.should.exist;
			done();
		});
	});
	it('should not start: too few options', function (done) {
		options.choices = -231;
		simon.init(options, function (err, returnedGame) {
			err.should.exist;
			done();
		});
	});
	it('should not start: illegal choice', function (done) {
		options.choices = 'fred';
		simon.init(options, function (err, returnedGame) {
			err.should.exist;
			done();
		})
	})
})