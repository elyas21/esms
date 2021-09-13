const { Finace } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Finace);
      const finace = await Finace.findAll();
      res.send(finace);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOne(req, res) {
    console.log(req.params);
    try {
      const finace = await Finace.findOne({
        where: {
          finaceId: req.params.finaceId
        }
      });
      if (finace) {
        res.status(200).send({ finace, found: true });
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
      const exissting = await Finace.findOne({
        where: {
          finaceId: req.body.finaceId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Finace.update(newUser, {
          where: {
            finaceId: req.body.finaceId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          finace: exissting.toJSON()
        });
      }

      const finace = await Finace.create(req.body);
      //   const schoolJson = finace.toJSON();

      res.send({
        finace: finace.toJSON(),
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
      const finace = await Finace.update(req.body, {
        where: {
          finaceId: req.body.finaceId
        }
      });
      if (finace[0]) {
        res.send({
          finace,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update finace got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      console.log(req.params.finaceId);
      dd.softDelete = true;
      const finace = await Finace.update(req.body, {
        where: {
          finaceId: req.params.finaceId
        }
      });
      if (finace[0] == 1) {
        const AutCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.params.finaceId;
        const userR = await AutCon.remove(candidateuser);
        console.log(userR + 'fffffffffffffff');
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the finace'
      });
    }
  }
};
