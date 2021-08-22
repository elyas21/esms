const express = require('express');
const router = express.Router();

const Grade = require('../manageGrade');

router
  .get('/get-all-by-school/:school', Grade.getAllBySchool)
  .get('/get-all-by-school/:school/:grade', Grade.getAllBySchoolGrade)
  .get('/get-all-course-by-school-grade/:school/:grade', Grade.getCourseList)

  .get('/get-one-by-school-grade/:school/:gradeId', Grade.getOneBySchoolGrade)
  // .get("get-all-by-school-course/:grade" , Grade.getCourse)
  .post('/ass-course-grade', Grade.assignCourse)
  .delete('/remove-course-grade/:gradeId/:courseId', Grade.removeAssignCourse)
  .get('/getAll', Grade.getAll)
  .get('/get-one/:gradeId', Grade.getOne)
  .post('/add', Grade.add)
  .post('/update', Grade.update)
  .delete('/remove/:gradeId', Grade.remove);

module.exports = router;
