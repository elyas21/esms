const passport = require('passport');
const config = require('../config/google-credentials');
const { google } = require('googleapis');
const { log } = require('console');

const SCOPES = ['https://www.googleapis.com/auth/calendar','https://www.googleapis.com/auth/classroom.courses'];
const { client_secret, client_id, redirect_uris } = config.web;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);


module.exports = {
  async isGCalendarAutherized(req, res, next) {
    // if there is valid token return user to there route
    // else return generate authUrl and send to the user

    if (isThereToken(req.user)) {
      oAuth2Client.next();
    } else {
      try {
        const authUrl = oAuth2Client.generateAuthUrl({
          access_type: 'offline',
          scope: SCOPES
        });
        console.log(authUrl);
        //   res.redirect(authUrl)
        req.session.authUrl = authUrl;
        req.session.requestUrl = `http://localhost:3000${req.originalUrl}`;
        res.redirect(authUrl);
      } catch (error) {
        console.log(error)
      }
      // next();
    }

    // if (err || !user) {
    //   res.status(403).send({
    //     error: 'you do not have access to this resource'
    //   });
    // } else {
    //   req.user = user;
    //   next();
    // }
  },
  async googleAuthCallback(req, res) {
    code = req.query.code
    

    // console.log(code);
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      console.log(token);
      oAuth2Client.setCredentials(token);
    //   // Store the token to disk for later program executions
      console.log('ss\n\n\\n\n\n\n\nnllllllllllllllllllllll\n\n\n\\n\n\n\n\nn');
      res.send('ok');
    });
  }
};
function isThereToken(user) {
  return false;
}
