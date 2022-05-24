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
const config = require('./config/database');

var MySQLStore = require('express-mysql-session')(session);
var options = {
	host: config.db.host,
	port: 3306,
	user: config.db.user,
	password: config.db.password,
	database: config.db.session_db
};
var sessionStore = new MySQLStore(options);
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    // store: sessionStore,
    saveUninitialized: true
  })
);


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
