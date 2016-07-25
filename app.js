/**
 * Created by Michael Sanford on 7-25-16
 */
const PORT = process.env.PORT || 3001;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var request = require('request');
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/random-quotes';
mongoose.connect(MONGOURL, err => {
    console.log(err || 'Connected to MongoDB');
});
var app = express();
app.use(cookieParser());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));




var server = http.createServer(app);
server.listen(PORT, err => {
    console.log(err || `Server listening on port ${PORT}`);
});
