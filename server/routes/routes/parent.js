const express = require('express');
const router = express.Router();

const Parent = require('../manageParent');

router
  .get('/getAll', Parent.getAll)
  .get('/get-one/:parentId', Parent.getOne)
  .post('/add', Parent.add)
  .post('/update', Parent.update)
  .delete('/remove', Parent.remove);

module.exports = router;
