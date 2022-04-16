var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');
var session = require('express-session');
const passport = require('passport');

const { sequelize } = require('./model');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser());

app.use(session({ secret: '123dsf4567890QWERTY', resave: false, saveUninitialized: false }));
const config = require('./config/config');

app.use(cookieParser());

// require('./polices/passport-google');
require('./passport')
var routes = require('./routes');



// const cookieSession = require('cookie-session')
// app.use(cookieSession({
  //   name: 'google-auth-session',
  //   keys: ['key1', 'key2']
// }))
// app.use(passport.initialize());
// app.use(passport.session());



// require('./routes')(app);
app.use('/api/*', routes);

app.use(express.static(path.join(__dirname, '../dist/browser')));

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../dist/browser/index.html'));
// });


sequelize.sync({ force: false }).then(() => {});

module.exports = app;
