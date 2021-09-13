const { Payment } = require('../model');

module.exports = {
  async initPayment(payment) {
    try {
      console.log(payment);
      await Payment.create(payment);
      return;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  async getAll(req, res) {
    try {
      console.log(Payment);
      const payment = await Payment.findAll();
      res.send(payment);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOne(req, res) {
    console.log(req.params);
    try {
      const payment = await Payment.findOne({
        where: {
          paymentId: req.params.paymentId
        }
      });
      if (payment) {
        res.status(200).send({ payment, found: true });
      } else {
        res.send({ found: false });
      }
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async add(req, res) {
    try {
      const exissting = await Payment.findOne({
        where: {
          paymentId: req.body.paymentId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Payment.update(newUser, {
          where: {
            paymentId: req.body.paymentId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          payment: exissting.toJSON()
        });
      }

      const payment = await Payment.create(req.body);
      //   const schoolJson = payment.toJSON();

      res.send({
        payment: payment.toJSON(),
        regsterd: 'ok'
      });
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async update(req, res) {
    try {
      const payment = await Payment.update(req.body, {
        where: {
          paymentId: req.body.paymentId
        }
      });
      if (payment[0]) {
        res.send({
          payment,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update payment got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const payment = await Payment.update(req.body, {
        where: {
          paymentId: req.body.paymentId
        }
      });
      if (payment[0] == 1) {
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the payment'
      });
    }
  }
};
