const express = require('express');
const router = express.Router();

const CourseGradeing = require('../manageCouresGrade');

router
  .get('/get-all-by-school/:school', CourseGradeing.getAllBySchool)
  .get('/get-all-by-school-section/:school/:section', CourseGradeing.getAllBySchoolSection)
  .get('/get-one-by-school/:school/:couresGradeingId', CourseGradeing.getOneBySchool)
  .get(
    '/get-all-student-by-school/:school/:lecture/:course/:section',
    CourseGradeing.getAllStuGradeingBySchoolCourseLecture
  )
  .get(
    '/get-all-student-by-school-term/:school/:lecture/:course/:section/:term',
    CourseGradeing.getAllStuGradeingBySchoolCourseLectureTerm
  )
  .get(
    '/get-grade-by-school-term-classYear-id/:school/:student/:classYear/:term',
    CourseGradeing.getGradeBySchoolStuClassYearTerm
  )
  .get(
    '/get-all-student-by-school-section-term-course/:school/:section/:course/:term',
    CourseGradeing.getGradeBySchoolSectionTermCourse
  )

  .get('/get-one/:couresGradeingId', CourseGradeing.getOne)
  .post('/add', CourseGradeing.add)
  .post('/update', CourseGradeing.update)
  .delete('/remove', CourseGradeing.remove)
  .get('/getAll', CourseGradeing.getAll);

module.exports = router;
