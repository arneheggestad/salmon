var express = require('express'),
		app = express(),
		morgan = require('morgan'),
		session = require('express-session'),
		simon = require('./app/simon.js'),
		port = process.env.PORT || 8080
		;

app.use(morgan('dev'));
app.set('static', __dirname + 'app/html/');
app.use(express.static(__dirname + '/'));

// require('./app/routes.js')(app);

app.listen(port);
console.log('Waiting for players on port ' + port);

var pieces = 6,
    startAngle = 1.5,
    arcPiece = (360 / pieces) / 180, // arc piece in radians
    colorArray = require('./colorArray.js'),
    currentAngle = 0,
    currentColor = '';
    ;

for (var i = 0; i < pieces; i++) {
  currentColor = colorArray[Math.floor(currentAngle * 48)];
  console.log(i, currentColor)
  currentAngle += arcPiece;
}