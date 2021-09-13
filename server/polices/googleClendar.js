const { google } = require('googleapis');

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
  '450078753372-e3s0cmav814dlm1dtq68m2np2s2b4ans.apps.googleusercontent.com',
  'eVeQy_Mj9cvCo8cIB1l_kIQP'
);

oAuth2Client.setCredentials({
  refresh_token:
    '1//04EiZHubsH_MICgYIARAAGAQSNwF-L9IrUXxk0e_oT27e9hK2FFevsqTrSn5tUC4nEZTRDJw1oHGnfTRrIfGmBk0G6Pwh_DKQ5NY'
});

// Create a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

// Create a new event start date instance for temp uses in our calendar.
const eventStartTime = new Date();
eventStartTime.setDate(eventStartTime.getDay() + 2);

// Create a new event end date instance for temp uses in our calendar.
const eventEndTime = new Date();
eventEndTime.setDate(eventEndTime.getDay() + 4);
eventEndTime.setMinutes(eventEndTime.getMinutes() + 45);

var event = {
  summary: 'Google I/O 2015',
  location: '800 Howard St., San Francisco, CA 94103',
  description: "A chance to hear more about Google's developer products.",
  start: {
    dateTime: '2015-05-28T09:00:00-07:00',
    timeZone: 'America/Los_Angeles'
  },
  end: {
    dateTime: '2015-05-28T17:00:00-07:00',
    timeZone: 'America/Los_Angeles'
  },
  recurrence: ['RRULE:FREQ=DAILY;COUNT=2'],
  attendees: [{ email: 'lpage@example.com' }, { email: 'sbrin@example.com' }],
  reminders: {
    useDefault: false,
    overrides: [
      { method: 'email', minutes: 24 * 60 },
      { method: 'popup', minutes: 10 }
    ]
  }
};

calendar.events.insert(
  {
    auth: oAuth2Client,
    calendarId: 'primary',
    resource: event
  },
  function(err, event) {
    if (err) {
      console.log('There was an error contacting the Calendar service: ' + err);
      return;
    }
    console.log('Event created: %s', event.htmlLink);
  }
);
