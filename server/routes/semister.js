const express = require('express');
const router = express.Router();

const Semister = require('../controllers/manageSection');

router
  .get('/getAll', Semister.getAll)
  .get('/get-all-by-school/:school', Semister.getAllBySchool)
  .post('/add', Semister.add)
  .post('/update', Semister.update)
  .delete('/remove', Semister.remove);

module.exports = router;
