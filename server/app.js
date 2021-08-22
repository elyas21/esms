var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

const { sequelize } = require('./model');
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist/browser')));

require('./passport');
var routes = require('./routes/routes');
// require('./routes')(app);
app.use('/api/', routes);

app.get('*', function(req, res) {
  res.sendfile(path.join(__dirname, '../dist/browser/index.html'));
});

const config = require('./config/config');

sequelize.sync({ force: false }).then(() => {});

module.exports = app;
