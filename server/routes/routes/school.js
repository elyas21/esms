const express = require('express');
const router = express.Router();

const School = require('../manageSchool');

router
  .get('/getAll', School.getAll)
  .get('/get-one/:schoolId', School.getOne)
  .post('/add', School.add)
  .post('/update', School.update)
  .delete('/remove', School.remove);

module.exports = router;
