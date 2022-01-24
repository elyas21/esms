const express = require('express');
const router = express.Router();

const Schedule = require('../controllers/manageSchedule');

router
  .get('/get-all-by-school/:school', Schedule.getAllBySchool)
  .get('/get-all-by-school-section/:school/:section', Schedule.getAllBySchoolSection)
  .get('/get-one-by-school/:school/:id', Schedule.getOneBySchool)
  .get('/getAll', Schedule.getAll)
  .get('/get-one/:id', Schedule.getOne)
  .get('/get-section-week/:school/:section/:start/:end', Schedule.getBySchoolSectionWeek)
  .post('/add-bulk', Schedule.addBulk)
  .post('/add', Schedule.add)
  .post('/update', Schedule.update)
  .delete('/remove', Schedule.remove);

module.exports = router;
