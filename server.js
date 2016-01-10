// Get all the packages
var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    jwt         = require('jsonwebtoken')
    config      = require('./config/config'),
    User        = require('./app/models/user');

// Configuration
var port = config.port,
    host = config.host;

mongoose.connect(config.mongo.uri);
app.set('superSecret', config.secret);

// body-parser allows us to get ifo from POST and/or URL parameters
if (config.environment === 'development') {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('dev'));
}


// TODO modularize routes

/***** Routes *****/
app.get('/', function (req, res) {
    res.send('Hello! Welcome to fleo authentication service.');
});

app.listen(port);
console.log('Magic happens at ' + host + port);
