const { Director, Address } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Director);
      const director = await Director.findAll();
      res.send(director);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async add(req, res) {
    try {
      console.log(req.body);
      const director = await Director.create(req.body);
      const schoolJson = director.toJSON();

      res.send({
        director: schoolJson,
        regsterd: 'ok'
      });
    } catch (e) {
      console.log(e);
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async update(req, res) {
    try {
      const director = await Director.update(req.body, {
        where: {
          directorId: req.body.directorId
        }
      });
      if (director[0] == 1) {
        res.send({
          director,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update director got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(req.body);
      dd.softDelete = true;
      const director = await Director.update(req.body, {
        where: {
          directorId: req.body.directorId
        }
      });
      if (director[0] == 1) {
        const AutCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.body.directorId;
        await AutCon.remove(candidateuser);
        res.send({ removed: 'ok' });
      } else {
        return res.send({ removed: 'bad' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send({
        error: err + 'an error has occured trying to delete the director'
      });
    }
  },
  async getBySchool(req, res) {
    try {
      console.log(Director);
      const director = await Director.findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: Address
          }
        ]
      });
      res.send(director);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  }
};
