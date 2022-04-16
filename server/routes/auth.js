const express = require('express');
const { glogin } = require('../controllers/autCon');
const passport = require('passport');
const authService = require('../polices/authService');
const config = require('../config/google-credentials');
const { User } = require('../model');
const router = express.Router();

// const auth = require('../controllers/autCon');
const auth = require('../controllers/autCon');

router.post('/login', auth.login).post('/register', auth.register);

const { google } = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
  config.web2.client_id,
  config.web2.client_secret,
  config.web2.redirect_uris[2]
);

// Access scopes for read-only Drive activity.
const scopes = [
  'https://www.googleapis.com/auth/calendar',
  'https://www.googleapis.com/auth/gmail.compose',
  'https://www.googleapis.com/auth/classroom.courses'
];
const isAuthenticated = require('../polices/isAuthenticated');

router.get('/google', [
  isAuthenticated,
  (req, res, next) => {
    console.log(req)
    next();
  },
  (req, res) => {
    // Generate a url that asks permissions for the Drive activity scope
    logger.info('google');
    console.log(resdfq);
    const authorizationUrl = oauth2Client.generateAuthUrl({
      // 'online' (default) or 'offline' (gets refresh_token)
      access_type: 'offline',
      /** Pass in the scopes array defined above.
       * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
      scope: scopes,
      // Enable incremental authorization. Recommended as a best practice.
      include_granted_scopes: true
    });
    res.redirect(301, authorizationUrl);
  }
]);

// callback url upon successful google authentication
const url = require('url');
const isLoggedIn = require('../polices/IsGAuthenticated');
const { log } = require('console');

// Receive the callback from Google's OAuth 2.0 server.
router.get('/google/callback', async (req, res) => {
  // if ()

  // Handle the OAuth 2.0 server response
  let q = url.parse(req.url, true).query;

  // Get access and refresh tokens (if access_type is offline)
  let { tokens } = await oauth2Client.getToken(q.code);
  oauth2Client.setCredentials(tokens);
  // if user does not have googleId in database, upsert google id and refresh token
  // if user has googleId in database, update refresh token
  // console.log(tokens);
  const user = await User.findOne({ where: { googleId: tokens.refresh_token } });
  console.log(user);
  if (user) {
    await User.update(
      { googleRefreshToken: tokens.refresh_token },
      {
        where: {
          userId: req.session.userInfo.userId
        }
      }
    );
  } else {
    await User.update(
      { googleId: q.id, googleRefreshToken: tokens.refresh_token },
      {
        where: {
          userId: req.session.UserInfo.userId
        }
      }
    );
  }
  console.log(tokens);
  // authService.signToken(req, res);
  res.send(tokens);
});

// route to check token with postman.
// using middleware to check for authorization header
router.get('/verify', authService.checkTokenMW, authService.verifyToken, (req, res) => {
  // authService.verifyToken(req, res);
  if (null === req.authData) {
    res.sendStatus(403);
  } else {
    res.json(req.authData);
  }
});

// exports.minimumPermissionLevelRequired = (required_permission_level) => {
//   return (req, res, next) => {
//       let user_permission_level = parseInt(req.jwt.permission_level);
//       let user_id = req.jwt.user_id;
//       if (user_permission_level & required_permission_level) {
//           return next();
//       } else {
//           return res.status(403).send();
//       }
//   };
// };

// PermissionMiddleware.minimumPermissionLevelRequired(PAID),
// PermissionMiddleware.minimumPermissionLevelRequired(FREE),
// PermissionMiddleware.minimumPermissionLevelRequired(ADMIN),

// const passport = require('passport');

// const gauth = require('../polices/g-cal');
// // router.get('/test',gauth.isGCalendarAutherized, function (req, res) {
// //   res.send('hello, user!')
// // })
// // router.get('/google-auth-callback',gauth.googleAuthCallback)

// router.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/error', (req, res) => res.send('Unknown Error'));
// router.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: '/error' }),
//   async function(req, res) {
//     const jwt = await glogin(req, res);
//     const htmlWithEmbeddedJWT = `
//     <html>
//      <script>
//         // Save JWT to localStorage
//         window.localStorage.setItem('currentUser', '${jwt}');
//         // Redirect browser to root of application
//         window.location.href = '/';
//       </script>
//     </html>
//     `;

//     res.send(htmlWithEmbeddedJWT);

//     res.redirect('/');
//   }
// );

// router.get('/logout', (req, res) => {
//   req.session = null;
//   req.logout();
//   res.redirect('/');
// });

module.exports = router;
