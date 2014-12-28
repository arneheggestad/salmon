var express = require('express'),
		app = express(),
		morgan = require('morgan'),
		session = require('express-session'),
		simon = require('./app/simon.js'),
		port = process.env.PORT || 8080
		;

app.use(morgan('dev'));

require('./app/routes.js')(app);
app.use('', express.static(__dirname + '/app/html'));

app.listen(port);
console.log('Waiting for players on port ' + port);
