const express = require('express');
const router = express.Router();

const ClassYear = require('../manageClassYear');

router
  .get('/getAll', ClassYear.getAll)
  .get('/get-all-by-school/:school', ClassYear.getAllBySchool)
  .post('/add', ClassYear.add)
  .post('/update', ClassYear.update)
  .delete('/remove', ClassYear.remove);

module.exports = router;
