const { google } = require('googleapis');

const gconfig = require('../config/google-credentials');


const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const { client_secret, client_id, redirect_uris } = gconfig.web;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[1]);
exports.module = oAuth2Client;

