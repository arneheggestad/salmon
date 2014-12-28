var should = require('should'),
		board = require('../app/board.js')
		;

describe('generate a game board', function () {
	it('should create a board with five pieces', function (done) {
		board.generate(5, function (err, board) {
			console.log(board);
			done();
		})
	})
	it('should create a board with 16 pieces', function (done) {
		board.generate(16, function (err, board) {
			console.log(board);
			done();
		})
	})
});
