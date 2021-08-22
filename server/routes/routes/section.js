const express = require('express');
const router = express.Router();

const Section = require('../manageSection');

router
  .get('/get-all-by-school/:school', Section.getAllBySchool)
  // .get("get-all-by-school/:school/:classYear", Section.getAllBySchoolClassYear)
  .get('/get-all-by-school/:school/:classYear', Section.getAllBySchoolClassYear)
  .get('/get-one-by-school/:school/:section', Section.getOneBySchool)
  .get('/get-all-by-school-grade/:school/:grade', Section.getAllBySchoolGrade)
  .get('/get-all-by-school/:school/:grade/:classYear', Section.getAllBySchoolGradeClassYear)
  .get('/get-one-by-school/:school/:section/:classYear', Section.getOneBySchoolGradeClassYear)
  .get('/getAll', Section.getAll)
  .get('/get-one/:sectionId', Section.getOne)
  .post('/add', Section.add)
  .post('/update', Section.update)
  .delete('/remove', Section.remove);

module.exports = router;
