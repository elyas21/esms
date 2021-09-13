const express = require('express');
const router = express.Router();

const Teacher = require('../controllers/manageTeacher');

router
  .get('/get-all-by-school/:school', Teacher.getAllBySchool)
  .get('/get-one-by-school/:school/:lecture', Teacher.getOneBySchool)
  .get('/getAll', Teacher.getAll)
  .get('/get-one/:teacherId', Teacher.getOne)
  .post('/add', Teacher.add)
  .post('/update', Teacher.update)
  .delete('/remove/:teacherId', Teacher.remove);

module.exports = router;
