const express = require('express');
const router = express.Router();

const Staff = require('../controllers/manageStaff');

router
  .get('/get-all-by-school/:school', Staff.getAllBySchool)
  .get('/getAll', Staff.getAll)
  .get('/get-one/:StaffId', Staff.getOne)
  .post('/add', Staff.add)
  .post('/update', Staff.update)
  .delete('/remove/:StaffId', Staff.remove);

module.exports = router;
