const express = require('express');
const router = express.Router();

const Finace = require('../controllers/manageFinace');

router
  .get('/getAll', Finace.getAll)
  .get('/get-one/:finaceId', Finace.getOne)
  .post('/add', Finace.add)
  .post('/update', Finace.update)
  .delete('/remove/:finaceId', Finace.remove);

module.exports = router;
