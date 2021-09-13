const express = require('express');
const router = express.Router();

const Registra = require('../controllers/manageRegistra');

router
  .get('/getAll', Registra.getAll)
  .get('/get-one/:registraId', Registra.getOne)
  .post('/add', Registra.add)
  .post('/update', Registra.update)
  .delete('/remove/:registraId', Registra.remove);

module.exports = router;
