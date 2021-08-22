const express = require('express');
const router = express.Router();

const Director = require('../manageDirector');

router
  .get('/getAll', Director.getAll)
  .post('/add', Director.add)
  .post('/update', Director.update)
  .delete('/remove', Director.remove);

module.exports = router;
