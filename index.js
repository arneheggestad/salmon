var express = require('express'),
		app = express(),
		morgan = require('morgan'),
		session = require('express-session'),
		simon = require('./app/simon.js'),
		port = process.env.PORT || 8080
		;

app.use(morgan('dev'));
app.set('static', __dirname + '/html');

require('./app/routes.js')(app);

app.listen(port);
console.log('Waiting for players on port ' + port);

var pieces = 4,
    startAngle = 1.5,
    arcPiece = (360 / pieces) / 180,
    colors = ["red", "blue", "yellow"];

for (var i = 0; i < pieces; i++) {
  var color = (i) % 3;
  var fillStyle = colors[color];
  console.log(fillStyle, startAngle, arcPiece);
  startAngle = startAngle + arcPiece;
}