var express = require('express'),
		app = express(),
		morgan = require('morgan'),
		session = require('express-session'),
		simon = require('./app/simon.js'),
		port = process.env.PORT || 8080
		;

app.use(morgan('dev'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

require('./app/routes.js')(app);

app.listen(port);
console.log('Waiting for players on port ' + port);
