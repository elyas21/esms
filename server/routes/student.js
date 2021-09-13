const express = require('express');
const router = express.Router();

const Student = require('../controllers/manageStudent');

router
  .get('/get-all-by-school-pg/:school/:pageSize/:page', Student.getAllBySchool)
  .get('/get-all-by-school-section/:school/:section', Student.getAllBySchoolSection)
  .get('/get-one-by-school/:school/:student', Student.getOneBySchool)

  .get(
    '/get-one-by-school-classYear/:school/:currentClassYear/:student',
    Student.getOneBySchoolClassYear
  )

  .get(
    '/get-all-by-school/:school/:grade/:lastClassYear',
    Student.getCandidateBySchoolGradeClassYear
  )
  .get(
    '/get-all-registerd-by-grade-school/:school/:grade/:currentClassYear',
    Student.getallRegisterdStudentsByGradeClassYear
  )
  .get('/get-one/:studentId', Student.getOne)
  .post('/add', Student.add)
  .post('/assignToSection', Student.assignToSection)
  .post('/removeFromSection', Student.removeFromSection)
  .post('/update', Student.update)
  .delete('/remove', Student.remove)
  .get('/getAll', Student.getAll);

module.exports = router;
