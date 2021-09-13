const express = require('express');
const router = express.Router();

const Payment = require('../controllers/managePayment');

router
  .get('/getAll', Payment.getAll)
  .get('/get-one/:paymentId', Payment.getOne)
  .post('/add', Payment.add)
  .post('/update', Payment.update)
  .delete('/remove', Payment.remove);

module.exports = router;
