var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');
var passport = require('passport');
const { sequelize } = require('./model');
var app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(logger('dev'));
var parseurl = require('parseurl');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser());

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,

    saveUninitialized: true
  })
);

const config = require('./config/config');

// require('./polices/passport-google');
require('./passport');
var routes = require('./routes');
app.use(passport.initialize());

// require('./routes')(app);
app.use('/api/', routes);

app.use(express.static(path.join(__dirname, '../dist/browser')));

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../dist/browser/index.html'));
// });

sequelize.sync({ force: false }).then(() => {});

module.exports = app;
