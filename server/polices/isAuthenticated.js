const passport = require('passport');

module.exports = function(req, res, next) {
  passport.authenticate('jwt', function(err, user) {
    if (err || !user) {
      res.status(403).send({
        error: 'you do not have access to this resource'
      });
    } else {
      req.user = user;
      req.session.userInfo = user;
      console.log(req.session.userInfo);
      next();dfdf
      res.send(user)
    }
  })(req, res, next);
};
