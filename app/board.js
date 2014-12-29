var board = {
	generate: function (numPieces, callback) {
		var board = [],
				// arcPiece = (360 / numPieces) / 180; // arc piece in radians
        anglePiece = 360 / numPieces;
				currentAngle = 0,
				currentColor = ''
				;

		for (var i = 0; i < numPieces; i++) {
  		var tmp = {
				value: 1 / numPieces,
				color: 'hsla(' + currentAngle + ', 100%, 80%, 1)',
				highlight: 'hsla(' + currentAngle + ', 100%, 50%, 1)',
				label: i + 1
			}
			currentAngle += anglePiece;
			board.push(tmp);
		};
		return callback(null, board);
	}

}

module.exports = board;
