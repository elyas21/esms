const { Registra } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Registra);
      const registra = await Registra.findAll();
      res.send(registra);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOne(req, res) {
    console.log(req.params);
    try {
      const registra = await Registra.findOne({
        where: {
          registraId: req.params.registraId
        }
      });
      if (registra) {
        res.status(200).send({ registra, found: true });
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
      const exissting = await Registra.findOne({
        where: {
          registraId: req.body.registraId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Registra.update(newUser, {
          where: {
            registraId: req.body.registraId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          registra: exissting.toJSON()
        });
      }

      const registra = await Registra.create(req.body);
      //   const schoolJson = registra.toJSON();

      res.send({
        registra: registra.toJSON(),
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
      const registra = await Registra.update(req.body, {
        where: {
          registraId: req.body.registraId
        }
      });
      if (registra[0]) {
        res.send({
          registra,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update registra got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const registra = await Registra.update(dd, {
        where: {
          registraId: req.params.registraId
        }
      });
      if (registra[0] == 1) {
        const AutCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.params.registraId;
        isUsrde = await AutCon.remove(candidateuser);
        console.log(isUsrde);
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the registra'
      });
    }
  }
};
