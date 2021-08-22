const express = require('express');
const router = express.Router();

const Course = require('../manageCourse');

router
  .get('/get-all-by-school/:school', Course.getAllBySchool)
  .get('/get-all-by-school-section/:school/:section', Course.getAllBySchoolSection)
  .get('/get-one-by-school/:school/:courseId', Course.getOneBySchool)
  .get('/getAll', Course.getAll)
  .get('/get-one/:courseId', Course.getOne)
  .post('/add', Course.add)
  .post('/update', Course.update)
  .delete('/remove', Course.remove);

module.exports = router;
