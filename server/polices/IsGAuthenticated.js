const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/api/auth/login');      
    // res.status(401).send('Not Logged In');
  }
};
module.exports = isLoggedIn;
