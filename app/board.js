var colorArray = require('./colorArray.js');

var board = {
	generate: function (numPieces, callback) {
		var board = [],
				arcPiece = (360 / numPieces) / 180; // arc piece in radians
				currentAngle = 0,
				currentColor = ''
				;

		for (var i = 0; i < numPieces; i++) {
				currentColor = colorArray[Math.floor(currentAngle * 48)];
  			var tmp = {
				value: 1 / numPieces,
				color: currentColor,
				highlight: currentColor,
				label: i + 1
			}
			currentAngle += arcPiece;
			board.push(tmp);
		};
		return callback(null, board);
	}

}

module.exports = board;
