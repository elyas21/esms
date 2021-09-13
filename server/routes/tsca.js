const express = require('express');
const router = express.Router();

const TSCA = require('../controllers/manageTeacherCouresSection');

router
  .get('/get-all-by-school-section/:school/:section', TSCA.getAllBySchoolSection)
  .get(
    '/get-all-by-school-section-by-lecture/:school/:lecture',
    TSCA.getAllBySchoolSectionByLecture
  )
  .get('/getAll', TSCA.getAll)
  .get(
    '/get-all-courses-by-school-section-by-lecture/:school/:lecture/:section',
    TSCA.getAllCoursesByLectureSection
  )
  .get('/get-one/:tscId', TSCA.getOne)
  .post('/add', TSCA.add)
  .post('/update', TSCA.update)
  .delete('/remove', TSCA.remove)
  .post('/add-course', TSCA.assignCourse);

module.exports = router;
