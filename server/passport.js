const passport = require('passport');
const User = require('./model/User');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const config = require('./config/config');

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
      secretOrKey: config.authentication.jwtSecret
    },
    async function(jwtPayload, done) {
      try {
        // console.log(jwtPayload.userId)
        // console.log('k')
        const user = await User.findOne({
          where: {
            userId: jwtPayload.userId
          }
        });
        // console.log(user)
        if (!user) {
          return done(new Error(), false);
        }
        return done(null, user);
      } catch (err) {
        return done(new Error(), false);
      }
    }
  )
);

module.exports = null;
