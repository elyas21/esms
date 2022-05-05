var moment = require('moment-timezone');
var { google } = require('googleapis');
var config = require('../../config/google-credentials');

const oauth2Client = new google.auth.OAuth2(
  config.web2.client_id,
  config.web2.client_secret,
  config.web2.redirect_uris[3]
);

var calendar = google.calendar('v3');
var drive = google.drive('v3');
var sheets = google.sheets('v4');

/* use a function for the exact format desired... */
function ISODateString(d) {
  function pad(n) {
    return n < 10 ? '0' + n : n;
  }
  return (
    d.getUTCFullYear() +
    '-' +
    pad(d.getUTCMonth() + 1) +
    '-' +
    pad(d.getUTCDate()) +
    'T' +
    pad(d.getUTCHours()) +
    ':' +
    pad(d.getUTCMinutes()) +
    ':' +
    pad(d.getUTCSeconds()) +
    'Z'
  );
}

function formatDateTime(date, time) {
  return moment(date).format('YYYY-MM-DD') + 'T' + moment(time).format('HH:mm:ss.SSS');
}

function formatSheetValues(event) {
  return {
    startDate: moment(event.startDate).format('ddd MM/DD/YYYY'),
    startTime: moment(event.startTime).format('hh:mm A'),
    endDate: moment(event.endDate).format('ddd MM/DD/YYYY'),
    endTime: moment(event.endTime).format('hh:mm A'),
    summary: event.note
  };
}

async function storeAccessToken() {
  var accessToken = oauth2Client.credentials.access_token;
  var expire_time = oauth2Client.credentials.expiry_date;

  // store token in case of refresh
  try {
    var user = await User.findOne({ 'google.id': req.user.google.id });

    user.google.token = accessToken;
    user.google.expire_time = expire_time;

    await user.save();
  } catch (err) {
    return err;
  }
}

module.exports = function ApiController() {
  //   create google calendar event using wrapper function return promise
  const createGoogleCalendarEvent = function(event) {
    return new Promise((resolve, reject) => {
      calendar.events.insert(
        {
          auth: oauth2Client,
          calendarId: event.CalId,
          resource: {
            summary: event.summary,
            description: event.summary,
            start: {
              dateTime: formatTimeZone(event.startDateTime)
            },
            end: {
              dateTime: formatTimeZone(event.endDateTime)
            }
          }
        },
        function(err, response) {
          if (err) reject(err);
          resolve(response.data);
        }
      );
    });
  };
  return {
    createGoogleCalendarEvent
  };
};
