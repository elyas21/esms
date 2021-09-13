const express = require('express');
const router = express.Router();

const Attendance = require('../controllers/manageAttendance');

router
  .get(
    '/get-all-by/:school/:ClassYear/:section/:month/:day',
    Attendance.getAttendaceBySectionDayClassYear
  )
  .post('/update', Attendance.update)
  .get('/get-all-by/:school/:section/:student/:month', Attendance.getAllByMonth);

module.exports = router;
