// Get all the packages
var express     = require('express'),
    app         = express(),
    bodyParser  = require('bodyParser'),
    morgan      = require('morgan'),
    mongoose    = require('mongoose'),
    jwt         = require('jsonwebtoken')
    config      = require('config/config'),
    User        = require('./app/models/user');

// Configuration
var port = config.port;
mongoose.connect(config.mongo.uri);
app.set('secret', config.secret);
