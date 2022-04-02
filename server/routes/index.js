// const isAuthenticated = require('./polices/isAuthenticated');
// const allowOnly = require("./polices/role");
// const passport = require('../polices/passport-google');
// import passport from "passport";
const passport = require('passport');
const express = require('express');
const router = express.Router();

const Auth = require('./auth');
const School = require('./school');
const Director = require('./director');
const Attendance = require('./attendance');
const ClassYear = require('./classYear');
const Semister = require('./semister');
const Student = require('./student');
const CourseGradeing = require('./courseGradeing');
const Schedule = require('./schedule');
const SudoSchedule = require('./sudoSchedule');

const Course = require('./course');
const Grade = require('./grade');
const Section = require('./section');
const Parent = require('./parent');
const Payment = require('./payment');
const Registra = require('./registra');
const Finace = require('./finace');
const Lecture = require('./lecture');
const TSCA = require('./tsca');
const Staff = require('./staff');

const isLoggedIn = require('../polices/IsGAuthenticated');

const gauth = require('../polices/g-cal');
// router.get('/test',gauth.isGCalendarAutherized, function (req, res) {
//   res.send('hello, user!')
// })
// router.get('/google-auth-callback',gauth.googleAuthCallback)

router.get('/auth/login', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/auth/error', (req, res) => res.send('Unknown Error'));
router.get(
  '/api/account/google',
  passport.authenticate('google', { failureRedirect: '/auth/error' }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

router
  .use('/auth/', Auth)
  .use('/school/', School)
  .use('/director/', Director)
  .use('/attendance/', Attendance)
  .use('/class-year/', ClassYear)
  .use('/semister/', Semister)
  .use('/student/', isLoggedIn, Student)
  .use('/course-gradeing/', CourseGradeing)
  .use('/event/', Schedule)
  .use('/sudo-schedule/', SudoSchedule)

  .use('/course/', Course)
  .use('/grade/', Grade)
  .use('/section/', Section)
  .use('/parent/', Parent)
  .use('/Payment/', Payment)
  .use('/registra/', Registra)
  .use('/staff/', Staff)
  .use('/finace/', Finace)
  .use('/lecture/', Lecture)
  .use('/teacher-section-coures-ass/', TSCA)
  .all('*', (req, res) => {
    res.status(404).send('api not Found');
  });

module.exports = router;
