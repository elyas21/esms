// const {User} = require('../model');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const config = require('../config/google-credentials');
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });
// passport.use(
//   new GoogleStrategy( 
//     {
//       clientID: config.web2.client_id,
//       clientSecret: config.web2.client_secret,
//       // callbackURL: 'http://localhost:3001/api/google/callback'
//       callbackURL: config.web2.redirect_uris[2]
//     },
//    async function(accessToken, refreshToken, profile, done) {
    
//       // const currentUser = await User.findOne({ googleId: profile.id , });
//       // if (currentUser) {
//       //   // already have the user -> return (login)
//       //   return done(null, currentUser);
//       // } else {
//       //   // register user and return
//       //   const newUser = await new User.create({ email: email, googleId: profile.id });
//       // }
//       return done(null, profile);
//     }
//   )
// );


// // client id 450078753372-ubcn25k1o6p4tmmv1bdls7ok5tcq4f3p.apps.googleusercontent.com
// // client secrte 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