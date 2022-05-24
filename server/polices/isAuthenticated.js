const jwt = require('jsonwebtoken');

// check if Token exists on request Header and attach token to request as attribute
exports.checkTokenMW = (req, res, next) => {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    req.token = bearerHeader.split(' ')[1];
    req.session.glt = bearerHeader.split(' ')[3];
    req.gtoken = bearerHeader.split(' ')[3];
    // if (!req.session.count) req.session.count = 0;
    // else req.session.count = req.session.count + 1;

    if (!req.session.tokens) {
      req.session.tokens = {}
    }
  
    // get the url pathname
    // var pathname = parseurl(req).pathname
  
    // count the views
    req.session.tokens['access_token'] = (req.session.tokens['access_token'] || 0) + 1
  


    next();
  } else {
    res.sendStatus(403);
  }
};

// Verify Token validity and attach token data as request attribute
exports.verifyToken = (req, res, next) => {
  console.log('res', req.session);

  jwt.verify(req.token, 'secret', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      req.authData = authData;
      req.user = authData;
      req.session.user = 'auth';
      console.log(req.sessionID)
      next();
    }
  });
};

// Verify Token Google validity and attach token data as request attribute
exports.verifyGToken = (req, res, next) => {
  console.log('res', req.session.glt);
    jwt.verify(req.gtoken, 'secret', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      req.gdata = authData;
      req.user = authData;
      req.session.gdata = authData;
      next();
    }
  });
};

// Issue Token
exports.signToken = (req, res) => {
  console.log(req);
  jwt.sign({ userId: req.user._id }, 'secretkey', { expiresIn: '5 min' }, (err, token) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ token });
    }
  });
};
