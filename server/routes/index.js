// const isAuthenticated = require("./polices/isAuthenticated");
// const allowOnly = require("./polices/role");

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

router
  .use('/auth/', Auth)
  .use('/school/', School)
  .use('/director/', Director)
  .use('/attendance/', Attendance)
  .use('/class-year/', ClassYear)
  .use('/semister/', Semister)
  .use('/student/', Student)
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
