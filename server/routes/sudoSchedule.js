const express = require('express');
const router = express.Router();

const SudoSchedule = require('../controllers/manageSudoSchedule');

router
  .get('/get-all-by-school/:school', SudoSchedule.getAllBySchool)
  .get('/get-all-by-school-section/:school/:section', SudoSchedule.getAllBySchoolSection)
  .get('/get-one-by-school/:school/:id', SudoSchedule.getOneBySchool)
  .get('/getAll', SudoSchedule.getAll)
  .get('/get-one/:id', SudoSchedule.getOne)
  .post('/add', SudoSchedule.add)
  .post('/update', SudoSchedule.update)
  .delete('/remove/:id', SudoSchedule.remove);

module.exports = router;
