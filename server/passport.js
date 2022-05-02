const passport = require('passport');
const User = require('./model/User');

// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config/config');

// passport.use(
//   new JwtStrategy(
//     {
//       jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
//       secretOrKey: config.authentication.jwtSecret
//     },
//     async function(jwtPayload, done) {
//       try {
//         // console.log(jwtPayload.userId)
//         // console.log('k')
//         const user = await User.findOne({
//           where: {
//             userId: jwtPayload.userId
//           }
//         });
//         // console.log(user)
//         if (!user) {
//           return done(new Error(), false);
//         }
//         return done(null, user);
//       } catch (err) {
//         return done(new Error(), false);
//       }
//     }
//   )
// );
// const config = require('../config/config');

// function jwtSignUser(user) {
//   const ONE_WEEK = 60 * 60 * 24 * 7;
//   return jwt.sign(user, config.authentication.jwtSecret, {
var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};

opts.jwtFromRequest =ExtractJwt.fromHeader("authorization") ;
opts.secretOrKey = config.authentication.jwtSecret;
opts.issuer = 'accounts.examplesoft.com';
opts.audience = 'yoursite.net';
passport.use(
  new JwtStrategy(opts, async function(jwt_payload, done) {
    try {
      const user = await User.findOne({
        where: {
          userId: jwt_payload.userId
        }
      });
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    } catch (error) {
      return done(null, false);
      // or you could create a new account
    }
  })
);
module.exports = null;
