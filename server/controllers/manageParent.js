const { Parent } = require('../model');

module.exports = {
  async getAll(req, res) {
    try {
      console.log(Parent);
      const parent = await Parent.findAll();
      res.send(parent);
    } catch (e) {
      res.status(400).send({
        error: `${e}This email account is already in use`
      });
    }
  },
  async getOne(req, res) {
    console.log(req.params);
    try {
      const parent = await Parent.findOne({
        where: {
          parentId: req.params.parentId
        }
      });
      if (parent) {
        res.status(200).send({ parent, found: true });
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
      const exissting = await Parent.findOne({
        where: {
          parentId: req.body.parentId
        }
      });
      if (exissting) {
        newUser = req.body;
        newUser.softDelete = false;
        await Parent.update(newUser, {
          where: {
            parentId: req.body.parentId
          }
        });
        return res.status(200).send({
          regsterd: 'ok',
          parent: exissting.toJSON()
        });
      }

      const parent = await Parent.create(req.body);
      //   const schoolJson = parent.toJSON();

      res.send({
        parent: parent.toJSON(),
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
      const parent = await Parent.update(req.body, {
        where: {
          parentId: req.body.parentId
        }
      });
      if (parent[0]) {
        res.send({
          parent,
          update: 'ok'
        });
      } else {
        res.send({ update: 'bad' });
      }
    } catch (e) {
      res.status(500).send({
        error: `${e} update parent got an error`
      });
    }
  },
  async remove(req, res) {
    try {
      const dd = req.body;
      console.log(dd);
      dd.softDelete = true;
      const parent = await Parent.update(req.body, {
        where: {
          parentId: req.body.parentId
        }
      });
      if (parent[0] == 1) {
        const AutCon = require('../controllers/autCon');
        const candidateuser = {};
        candidateuser.userId = req.body.parentId;
        await AutCon.remove(candidateuser);
        res.send({
          removed: 'ok'
        });
      } else {
        res.send({ removed: 'bad' });
      }
    } catch (err) {
      res.status(500).send({
        error: err + 'an error has occured trying to delete the parent'
      });
    }
  }
};
