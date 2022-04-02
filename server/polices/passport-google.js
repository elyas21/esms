const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config/google-credentials');
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: config.web.client_id,
      clientSecret: config.web.client_secret,
      // callbackURL: 'http://localhost:3001/api/google/callback'
      callbackURL: config.web.redirect_uris[0]
    },
    function(accessToken, refreshToken, profile, done) {
      console.log(profile)
      return done(null, profile); 
    }
  )
);
